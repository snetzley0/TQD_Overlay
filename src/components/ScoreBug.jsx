import Clock from './Clock'
import ScoreBugD from '../design/ScoreBugD'

const ScoreBug = (props) => {
    const { game, teamnames, score, matchscore, matchtype, tqdtoggles } = props;

    return (
        <>
        <style type="text/css">
        {`
            .clock {
                position: absolute;
                border: 1px dashed pink;
                
                padding: 0% 0;
                text-align: center;
                width: 18%;
                height: 45%;
                left: 50%;
                top: 30%;
                transform: translate(-50%, -50%);

                color: white;
                font-weight: 400;
                font-size: 320%;
                font-family: Consolas;

              }

              .sizeTest {
                position: absolute;
                left: 27.5%;
                height: 10%;
                width: 45%;
                top: 0%;
              }

              .scorebug {
                
              }
        `}
        </style>
        <div className='sizeTest'>
            
            <div className='scorebug'><ScoreBugD time={<Clock game_seconds={game.game.time_seconds} isOT={game.game.isOT}/>} teamnames={teamnames} score={score} isOT={game.game.isOT} matchscore={matchscore} matchtype={matchtype} tqdtoggles={tqdtoggles}/></div>
        </div>
        </>
    )
}

//<Clock game_seconds={game.game.time_seconds} isOT={game.game.isOT}/>

export default ScoreBug;


