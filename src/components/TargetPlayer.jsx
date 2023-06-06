import TargetPlayerBoost from "./TargetPlayerBoost";
import Testing from '../design/testing';
import TargetPlayerStatDesign from "../design/TargetPlayerStatDesign";
import BoostMeterD from '../design/BoostMeterD'
import goalImage from '../stat-icons/goal.svg'
import shotImage from '../stat-icons/shot-on-goal.svg'
import asstImage from '../stat-icons/assist.svg'
import saveImage from '../stat-icons/save.svg'

const TargetPlayer = (props) => {
    const { targetplayer, tqdtoggles } = props;
    document.documentElement.style.setProperty('--different', `${(window.innerHeight / 1080) * 2.7}`)
    return (
        <>
        <style type="text/css">
        {`
        

        .tnamebox {

        }

        .tname {
            
            width: 10.6em;
            position: absolute;
            text-align: right;
            bottom: 0.8em;
            left: 0.2em;
            color: white;
        }

        .tplayerboostbox {
            border: 1px dashed green;
            position: absolute;
            left: 0%;
            width: 30%;
            height: 30%;
            bottom: 0%;
        }

        .tplayerboost {
            background-color: yellow;
            position: absolute;
            bottom: 30%;
            height: 50%;
            width: 0%;
            left: 0%;
            transition: width 0.12s;
        } 

        .tstats {

        }

        .tnumber {
            color: white;
            text-align: right;
            font-size: 1.5em;
            bottom: 0.4em;
            width: 2.3em;
            
        }

        .ttext {
            color: #bababa;
            transform: translate(135%, 30%);
            font-size: 1.1em;
        }

        .tscore {
            position: absolute;
            left: 13em;
        } 
        .tscoret {
            position: absolute;
            left: 17.6em;
            bottom: 1em;
        }

        .tgoal {
            position: absolute;
            left: 17.5em;
            width: 1.8em;
        }
        .goalimage {
            position: absolute;
            bottom: .4em;
            width: 2em;
            left: 29.3em;
        }

        .tshot {
            position: absolute;
            left: 21.2em;
            width: 1.8em;
        }
        .shotimage {
            position: absolute;
            bottom: .5em;
            width: 1.8em;
            left: 35em;
        }

        .tassist {
            position: absolute;
            left: 24.8em;
            width: 1.8em;

        }
        .asstimage {
            position: absolute;
            bottom: .5em;
            width: 1.7em;
            left: 40.3em;
        }

        .tsave {
            position: absolute;
            left: 28.6em;   
            width: 1.7em;       
        }
        .saveimage {
            position: absolute;
            bottom: .4em;
            width: 1.5em;
            left: 46em;
           
        }

        .boostMeter {
            position: absolute;
            right: 2.5%;
            bottom: 6%;
            width: 11.5%;
        } 


        .targetPlayerBox {
            
        }

        .targetPlayer {
            position: absolute;
            top: 1px;
            height: 100%;
            width: 100%;
            left: 0%;

            font-size: 35%;
            font-family: sans-serif;
          }

        .tplayercontent {
            position: absolute;
            
            bottom: 0%;
            height: 20px;

            transform: scale(var(--different));
            transform-origin: bottom left;
        }
        `}
        </style>
        
        
        
        <div className="boostMeter"><BoostMeterD boost={targetplayer.boost} team={targetplayer.team} tqdtoggles={tqdtoggles}/></div>

        <div className="tplayercontent">
        <div className="targetPlayerBox"><TargetPlayerStatDesign targetplayer={targetplayer} tqdtoggles={tqdtoggles}/></div>
        <div className="targetPlayer">
            <div className="tnamebox">
                <div className="tname" style={{
                // adjusts font size proportionally when text length is over 17
                fontSize: targetplayer.name.length>17? (1.6*(17/targetplayer.name.length))+"em" : "1.6em",
            }}>{(targetplayer.name).toUpperCase()}</div>
            </div>

            <div className='tstats'>
                <div className='tscore tnumber'>{targetplayer.score}</div>
                <div className='tscoret ttext'>Score</div>
                <div className='tgoal tnumber'>{targetplayer.goals}</div>
                <img src={goalImage} alt="" class="filter goalimage"/>
                <div className='tshot tnumber'>{targetplayer.shots}</div>
                <img src={shotImage} alt="" class="filter shotimage"/>
                <div className='tassist tnumber'>{targetplayer.assists}</div>
                <img src={asstImage} alt="" class="filter asstimage"/>
                <div className='tsave tnumber'>{targetplayer.saves}</div>
                <img src={saveImage} alt="" class="filter saveimage"/>
            </div>  
        </div>
        </div>
        </>
    )
}

export default TargetPlayer;