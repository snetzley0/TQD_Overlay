import {useContext, useEffect, useState, useRef} from 'react';
import SocketContext from '../contexts/SocketContext';
import '../App.css';
import BluePlayerCard from '../components/BluePlayerCard';
import OrangePlayerCard from '../components/OrangePlayerCard';
import TargetPlayerBoost from '../components/TargetPlayerBoost';
import ReplayCard from '../components/ReplayCard';
import TargetPlayer from '../components/TargetPlayer';
import EventArray from '../custom-arrays/EventArray';
import ScoreBug from '../components/ScoreBug';
import TQDIconOrng from '../components/TQDIconOrng';
import TQDIconBlue from '../components/TQDIconBlue';
import PostGameStats from '../components/PostGameStats';

const isEmpty = (obj) => {
  return (
    [Object, Array].includes((obj || {}).constructor) &&
    !Object.entries(obj || {}).length
  );
}

let nextId = 0;

function Overlay() {
  const socket = useContext(SocketContext);
  const [gamestate, setGameState] = useState({game:{}, players:{}});
  const [statfeedstate, setStatFeed] = useState([]);
  const [test, setTest] = useState([]);
  const [newtest, setNewTest] = useState([]);
  const [latestgoal, setLatestGoal] = useState({});
  const [gamescore, setGameScore] = useState([0, 0]);
  const [matchscore, setMatchScore] = useState([0, 0]);
  const [onlyscorebugtoggle, setOnlyScorebugToggle] = useState(false);
  const [replayreviewtoggle, setReplayReviewToggle] = useState(false);
  
  const eventarray = new EventArray();
  let prevstatarray = new Array();
  let replaytest = null;
  const teamNames = [{id: 0, name: 'Blue Team'}, {id: 1, name: 'Orange Team'}];
  const teamNamesTest = ['Blue Team','Orange Team'];
  //variables to eventually move
  const [teamnames, setTeamNames] = useState(['Blue','Orange']);
  const [matchtype, setMatchType] = useState('Best of 7');                
  const [tqdtoggles, setTQDToggles] = useState([false, false]);                                                        

  const bluewinner = () => socket.emit('payload', {name: 'Overlay Game Winner Report', data: 'Team 1'});
  const orngwinner = () => socket.emit('payload', {name: 'Overlay Game Winner Report', data: 'Team 2'});

  const bluegoal = () => socket.emit('payload', {name: 'Overlay Goal Score Report', data: 'Team 1'});
  const ornggoal = () => socket.emit('payload', {name: 'Overlay Goal Score Report', data: 'Team 2'});

  const gameover = false;
  const declarethewinner = () => gamescore[0]>gamescore[1] ? bluewinner : orngwinner;

  useEffect(() => {
    socket.on('update', (update) => {
      if (update.event === 'game:update_state') {
        setGameState({
          ...gamestate, 
          game: { ...update.data },
          players: update.data.players && { ...update.data.players},
        });
        setTest([
          ...eventarray,  
        ])
        setNewTest([
          ...prevstatarray,
        ])
        
        setLatestGoal({
          ...replaytest,
        })
      }
      if (update.event === 'game:statfeed_event') {

        if (update.data.event_name === 'Goal' || 
            update.data.event_name === 'Assist' || 
            update.data.event_name === 'Save' || 
            update.data.event_name === 'Shot' || 
            update.data.event_name === 'Demolish' || 
            update.data.event_name === 'Demolition' || 
            update.data.event_name === 'HatTrick' || 
            update.data.event_name === 'Playmaker' || 
            update.data.event_name === 'EpicSave' || 
            update.data.event_name === 'Savior') { 

          eventarray.push(update.data)
          {console.log(eventarray)}
          
        }
      }
      if (update.event === 'game:goal_scored') {
        replaytest = update.data;
        //update.data.scorer.teamnum ? gamescore[1]++ : gamescore[0]++;
        update.data.scorer.teamnum ? ornggoal() : bluegoal();
        setGameScore({
          ...gamescore,
          
        })
      }
      if (update.event === 'game:match_ended') {
        update.data.winner_team_num ? orngwinner() : bluewinner();
        //update.data.winner_team_num ? setMatchScore([matchscore[0], matchscore[1] + 1]) : setMatchScore([matchscore[0] + 1, matchscore[1]]);
      }
      if (update.event === 'game:match_created') {
        socket.emit('payload', {name: 'Match Created'})
      }
      
    }); 

    socket.on('payload', (dashboardMessage) => {
      if (dashboardMessage.name === 'Match Score') {
        setMatchScore(dashboardMessage.data);
      }

      if (dashboardMessage.name === 'Goal Score') {
        setGameScore(dashboardMessage.data);
      }
      
      if (dashboardMessage.name === 'Team Names') {
        setTeamNames(dashboardMessage.data);
      }

      if (dashboardMessage.name === 'Match Type') {
        setMatchType(dashboardMessage.data);
      }
      if (dashboardMessage.name === 'TQD Toggles') {
        setTQDToggles(dashboardMessage.data);
      }
      if (dashboardMessage.name === 'OnlyScorebug Toggle') {
        setOnlyScorebugToggle(dashboardMessage.data);
      }
      if (dashboardMessage.name === 'ReplayReview Toggle') {
        setReplayReviewToggle(dashboardMessage.data);
      }
    });
    //eslint-disable-next-line
  },[]);
  
  return (
    <>
    {(!isEmpty(gamestate.game)) && (
      
    <div className="App">
      {/* testing end game stats */}
      {gamestate.game.game.hasWinner && <PostGameStats players={gamestate.players}/>}

      {<ScoreBug game={gamestate.game} teamnames={teamnames} score={gamescore} matchscore={matchscore} matchtype={matchtype} tqdtoggles={tqdtoggles}/>}
      
      {!gamestate.game.game.hasWinner && !onlyscorebugtoggle && (
        <>
        <div className='blueteam'>
          {!isEmpty(gamestate.players) && 
            Object.values(gamestate.players).filter(p => p.team.toString() == 0).sort((a,b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1 ).map((el,index) => {
              return <BluePlayerCard player={Object.values(gamestate.players).filter(p => p.team.toString() == 0).sort((a,b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1 )[index]} statfeed={test} prevstatfeed={newtest}/>;
            })
          }
          {!isEmpty(gamestate.players) && tqdtoggles[0] === true && <TQDIconBlue/>}
        </div>
        <div className='orangeteam'>
          {!isEmpty(gamestate.players) && 
            Object.values(gamestate.players).filter(p => p.team.toString() == 1).sort((a,b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1 ).map((el,index) => {
              return <OrangePlayerCard player={Object.values(gamestate.players).filter(p => p.team.toString() == 1).sort((a,b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1 )[index]} statfeed={test}/>;
            })
          }
          {!isEmpty(gamestate.players) && tqdtoggles[1] === true && <TQDIconOrng/>}
        </div>

          

        {!replayreviewtoggle && gamestate.game.game.isReplay && <ReplayCard stats={latestgoal} target={gamestate.game.game.target}/>}
      {!isEmpty(gamestate.game.game.target) && <TargetPlayer targetplayer={gamestate.players[gamestate.game.game.target.toString()]} tqdtoggles={tqdtoggles}/>}
      {!isEmpty(gamestate.game.game.target) && <TargetPlayerBoost boost={gamestate.players[gamestate.game.game.target.toString()].boost}/>} 
        </>
        )}
      
      

  </div>

  )}
  </>
  );
}

export default Overlay;