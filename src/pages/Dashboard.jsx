import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import DashboardSocketContext from '../contexts/DashboardSocketContext';

function Dashboard() {

    const socket = useContext(DashboardSocketContext);

    const [matchscore, setMatchScore] = useState([0, 0]);
    const [gamescore, setGameScore] = useState([0, 0]);
    const [teamnames, setTeamNames] = useState(['Blue','Orange']);
    const [snippet, setSnippet] = useState('Best of 7');
    const [matchtype, setMatchType] = useState('Best of 7');
    const [tqdtoggles, setTQDToggles] = useState([0, 0]);
    const [onlyscorebugtoggle, setOnlyScorebugToggle] = useState(false);


    socket.on('payload', (message) => {
        if (message.name === 'Overlay Game Winner Report') {
            if (message.data === 'Team 1') {setMatchScore([matchscore[0] + 1, matchscore[1]])};
            if (message.data === 'Team 2') {setMatchScore([matchscore[0], matchscore[1] + 1])};
        }
        if (message.name === 'Overlay Goal Score Report') {
            if (message.data === 'Team 1') {setGameScore([gamescore[0] + 1, gamescore[1]])};
            if (message.data === 'Team 2') {setGameScore([gamescore[0], gamescore[1] + 1])};
        }
        if (message.name === 'Match Created') {
            setGameScore([0, 0]);
        }
    });

    const increasebluematch = () => setMatchScore([matchscore[0] + 1, matchscore[1]]);
    const decreasebluematch = () => setMatchScore([matchscore[0] - 1, matchscore[1]]);
    const increaseorngmatch = () => setMatchScore([matchscore[0], matchscore[1] + 1]);
    const decreaseorngmatch = () => setMatchScore([matchscore[0], matchscore[1] - 1]);

    const increasebluegoal = () => setGameScore([gamescore[0] + 1, gamescore[1]]);
    const decreasebluegoal = () => setGameScore([gamescore[0] - 1, gamescore[1]]);
    const increaseornggoal = () => setGameScore([gamescore[0], gamescore[1] + 1]);
    const decreaseornggoal = () => setGameScore([gamescore[0], gamescore[1] - 1]);

    const matchScoreChange = () => socket.emit('payload', {name: 'Match Score Change', data: matchscore})

    const incrementBlueMatch = () => socket.emit('payload', { name: 'incrementBlueMatch', data: matchscore[0] });
    const decrementBlueMatch = () => socket.emit('payload', 'decrementBlueMatch');
    const incrementOrngMatch = () => socket.emit('payload', 'incrementOrngMatch');
    const decrementOrngMatch = () => socket.emit('payload', 'decrementOrngMatch');

    useEffect(() => {
        socket.emit('payload', {name: 'Match Score', data: matchscore})
    },[matchscore]);

    useEffect(() => {
        socket.emit('payload', {name: 'Goal Score', data: gamescore})
    },[gamescore]);

    useEffect(() => {
        socket.emit('payload', {name: 'Match Type', data: matchtype})
    },[matchtype]);

    useEffect(() => {
        socket.emit('payload', {name: 'TQD Toggles', data: tqdtoggles})
    },[tqdtoggles])

    useEffect(() => {
        socket.emit('payload', {name: 'OnlyScorebug Toggle', data: onlyscorebugtoggle})
    },[onlyscorebugtoggle])
    //const increasebluematch = () => props.setMatchScore([matchscore[0] + 1, matchscore[1]]);
    //const increaseorngmatch = () => props.setMatchScore([matchscore[0], matchscore[1] + 1]);
    //const decreasebluematch = () => props.setMatchScore([matchscore[0] - 1, matchscore[1]]);
    //const decreaseorngmatch = () => props.setMatchScore([matchscore[0], matchscore[1] - 1]);  onClick={increasebluematch} matchScoreChange()
    /*useEffect(() => {
        props.setMatchScore([bluematchscore, matchscore[1]+3])
      }, [bluematchscore]);*/

    return (
        <>
        <div className="dash">
            <div className="cattitle">Team Names</div>
            <div>{teamnames[0] + ' - ' + teamnames[1]}</div>
            <label>
                Team 1: 
                <input type="text" value={teamnames[0]} onChange={e => setTeamNames([e.target.value, teamnames[1]])}></input>
                <input type="checkbox" checked={tqdtoggles[0]} onChange={() => setTQDToggles([!tqdtoggles[0], tqdtoggles[1]])}/>
                TQD Drip
            </label>
            <div>
            <label>
                Team 2: 
                <input type="text" value={teamnames[1]} onChange={e => setTeamNames([teamnames[0], e.target.value])}></input>
                <input type="checkbox" checked={tqdtoggles[1]} onChange={() => setTQDToggles([tqdtoggles[0], !tqdtoggles[1]])}/>
                TQD Drip
            </label>
            </div>
            <button onClick={() => socket.emit('payload', {name: 'Team Names', data: teamnames})}>Set Team Names</button>

            <div className="cattitle">Match Type</div>
            <div>{'Current: ' + matchtype}</div>
            <label> <button type="button" className="dash-button" onClick={() => setMatchType('Best of 5')} >Best of 5</button></label>
            <label> <button type="button" className="dash-button" onClick={() => setMatchType('Best of 7')} >Best of 7</button></label>
            <label> <button type="button" className="dash-button" onClick={() => setMatchType('Series of 4')} >Series of 4</button></label>
            <label> <button type="button" className="dash-button" onClick={() => setMatchType('Scrim')} >Scrim</button></label>

            <div className="">Match Score</div>
        <button type="button" className="dash-button" onClick={increasebluematch}>Blue + 1</button> 
        <button type="button" className="dash-button" onClick={decreasebluematch} >Blue - 1</button> 
        {matchscore[0] + ' - ' + matchscore[1]}
        <button type="button" className="dash-button" onClick={increaseorngmatch} >Orange + 1</button> 
        <button type="button" className="dash-button" onClick={decreaseorngmatch} >Orange - 1</button>
            
            <div className="">Game Score</div>
        <button type="button" className="dash-button" onClick={increasebluegoal}>Blue + 1</button> 
        <button type="button" className="dash-button" onClick={decreasebluegoal} >Blue - 1</button> 
        {gamescore[0] + ' - ' + gamescore[1]}
        <button type="button" className="dash-button" onClick={increaseornggoal} >Orange + 1</button> 
        <button type="button" className="dash-button" onClick={decreaseornggoal} >Orange - 1</button> 

        <div className="cattitle">Misc.</div>
        <label>Only use scorebug: 
        <input type="checkbox" checked={onlyscorebugtoggle} onChange={() => setOnlyScorebugToggle(!onlyscorebugtoggle)}/>
        </label>
        </div>
        
        <div className="dash-footer">TQD Overlay version 1.0<br/>Stray#9840</div>
        </>
    );
}

//<MatchScoreComp/>
/*
function MatchScoreComp() {
    return (
        <>
        <div className="">Match Score</div>
        <button type="button" className="dash-button" onClick={increasebluematch}>Blue + 1</button> 
        <button type="button" className="dash-button" onClick={decreasebluematch} >Blue - 1</button> 
        {matchscore[0] + ' - ' + matchscore[1]}
        <button type="button" className="dash-button" onClick={increaseorngmatch} >Orange + 1</button> 
        <button type="button" className="dash-button" onClick={decreaseorngmatch} >Orange - 1</button>
        </>  
    );
}
*/

export default Dashboard;