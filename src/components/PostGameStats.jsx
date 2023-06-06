// may have to put each player into its own component
// design the layout, then use it as an svg to just auto-fill the info?
// design the page, not the info, then overlap the info ontop of the design for flexibility
import PostGameStatsD from "../design/PostGameStatsD";
import OrangePlayerCard from "./OrangePlayerCard";
import PostGamePlayerStats from "./PostGamePlayerStats";
import { useState, useEffect } from "react";

const PostGameStats = (props) => {
    const {players} = props;

    // code for mounting and showing/hiding component
    const [showComponent, setShowComponent] = useState(false); 
    const [transitionOut, setTransitionOut] = useState(false);   
    const { statfeed } = props;
    
    useEffect(() => {
      let timer = setTimeout(() => {
        setShowComponent(true)
      }, 7500);
      let timer2 = setTimeout(() => {
        //setShowComponent(false);
        setTransitionOut(true);
      }, 35000);
      return () => clearTimeout(timer), () => clearTimeout(timer2);
    }, []);  

    // the stats
    var blueteam = {score: 0, goals: 0, shots: 0, assists: 0, saves: 0, demos: 0, shotPercent: 0, touches: 0};
    var orngteam = {score: 0, goals: 0, shots: 0, assists: 0, saves: 0, demos: 0, shotPercent: 0, touches: 0};
    Object.values(players).filter(p => p.team.toString() == 0).map((el,index) => {
        blueteam.score += el.score;
        blueteam.goals += el.goals;
        blueteam.shots += el.shots;
        blueteam.assists += el.assists;
        blueteam.saves += el.saves;
        blueteam.demos += el.demos;
        (el.shots !== 0)? blueteam.shotPercent += el.goals/el.shots : blueteam.shotPercent += 0;
        blueteam.touches += el.touches;
    });
    Object.values(players).filter(p => p.team.toString() == 1).map((el,index) => {
        orngteam.score += el.score;
        orngteam.goals += el.goals;
        orngteam.shots += el.shots;
        orngteam.assists += el.assists;
        orngteam.saves += el.saves;
        orngteam.demos += el.demos;  
        (el.shots !== 0)? orngteam.shotPercent += el.goals/el.shots : orngteam.shotPercent += 0;
        orngteam.touches += el.touches;
    });

    return (
        <>
        <style type="text/css">
        {`
        .blueteamStats {
            
            position: absolute;
            top: 17%;
            left: 13%;
            height: 70%;
            width: 30%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }

        .orangeTeamStats {
            
            position: absolute;
            top: 17%;
            right: 13%;
            height: 70%;
            width: 30%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
        
        .playerstats {
            
            color: white;
            font-size: 1.5vw;
            width: 33%
        }

        .post-game-stats {
            position: absolute;
            width: 100%;
            left: 100%;
            opacity: 0;
            transition: left 1s ease, opacity 1s ease;
          }
          
          .post-game-stats.visible1 {
            opacity: 1;
            left: 0%;

            
          }
          
          .post-game-stats.visible1.out1 { 
            left: -100%;
            opacity: 0;
            display: hidden;
          }
        `}
        </style>
        
        <span className={`post-game-stats ${showComponent && 'visible1'} ${transitionOut && 'out1'}`}>

        

        <PostGameStatsD blueteam={blueteam} orngteam={orngteam}/>
        
        
        <div className="blueteamStats">
        {Object.values(players).filter(p => p.team.toString() == 0).sort((a,b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1 ).map((el,index) => {
              return <div className="playerstats"><PostGamePlayerStats player={Object.values(players).filter(p => p.team.toString() == 0).sort((a,b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1 )[index]}/></div>;
            })
        }
        </div>

        <div className="orangeTeamStats">
        {Object.values(players).filter(p => p.team.toString() == 1).sort((a,b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1 ).map((el,index) => {
              return <div className="playerstats"><PostGamePlayerStats player={Object.values(players).filter(p => p.team.toString() == 1).sort((a,b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1 )[index]}/></div>;
            })
        }
        </div>
        </span>
        </>
    )
}

export default PostGameStats;