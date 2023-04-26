import TargetPlayerBoost from "./TargetPlayerBoost";
import Testing from '../design/testing';
import TargetPlayerStatDesign from "../design/TargetPlayerStatDesign";
import BoostMeterD from '../design/BoostMeterD'
import goalImage from '../stat-icons/goal.svg'
import shotImage from '../stat-icons/shot-on-goal.svg'
import asstImage from '../stat-icons/assist.svg'
import saveImage from '../stat-icons/save.svg'

const TargetPlayer = (props) => {
    const { targetPlayer, tqdtoggles } = props;
    document.documentElement.style.setProperty('--different', `${(window.innerHeight / 1080) * 2.7}`)
    return (
        <>
        <style type="text/css">
        {`
        

        .tnamebox {

        }

        .tname {
            font-size: 1.6em;
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
        
        
        
        <div className="boostMeter"><BoostMeterD boost={targetPlayer.boost} team={targetPlayer.team} tqdtoggles={tqdtoggles}/></div>

        <div className="tplayercontent">
        <div className="targetPlayerBox"><TargetPlayerStatDesign targetPlayer={targetPlayer} tqdtoggles={tqdtoggles}/></div>
        <div className="targetPlayer">
            <div className="tnamebox">
                <div className="tname">{(targetPlayer.name).toUpperCase()}</div>
            </div>

            <div className='tstats'>
                <div className='tscore tnumber'>{targetPlayer.score}</div>
                <div className='tscoret ttext'>Score</div>
                <div className='tgoal tnumber'>{targetPlayer.goals}</div>
                <img src={goalImage} alt="" class="filter goalimage"/>
                <div className='tshot tnumber'>{targetPlayer.shots}</div>
                <img src={shotImage} alt="" class="filter shotimage"/>
                <div className='tassist tnumber'>{targetPlayer.assists}</div>
                <img src={asstImage} alt="" class="filter asstimage"/>
                <div className='tsave tnumber'>{targetPlayer.saves}</div>
                <img src={saveImage} alt="" class="filter saveimage"/>
            </div>  
        </div>
        </div>
        </>
    )
}

/*
<style type="text/css">
        {`
        .targetPlayer {
            border: 1px solid purple;
            position: absolute;
            bottom: 0%;
            width: 40%;
            height: 5%;
            font-size: 100%;
            font-family: Consolas;
          }

        .tnamebox {
            border: 1px dashed yellow;
            position: absolute;
            left: 0%;
            width: 30%;
            height: 70%;
            font-size: 1.5em;
            text-align: right;
            margin-right: 10%;
        }

        .tname {
            position: absolute;
            right: 5%;
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
            position: absolute;
            right: 0%;
            width: 70%;
        }

        .tnumber {
            color: white;
            width: 10%;
            text-align: right;
            font-size: 1.5em;
        }

        .ttext {
            color: grey;
            transform: translate(135%, 30%);
            font-size: 1.1em;
        }

        .tscore {
            position: absolute;
            left: 5%;
        }

        .tgoal {
            position: absolute;
            left: 23%;
        }
        .tshot {
            position: absolute;
            left: 41%;
        }
        .tassist {
            position: absolute;
            left: 58%;
            
        }
        .tsave {
            position: absolute;
            left: 74%;          
        }

        .targetPlayerBox {
            position: absolute;
            bottom: 0%;
            left: 0%;
        }
               
        `}
        </style>

<div className="targetPlayer">
            <div className="tnamebox">
                <div className="tname">{targetPlayer.name}</div>
            </div>
            <div className="tplayerboostbox">
                <div className="tplayerboost" style={{width: targetPlayer.boost + '%'}}/>
            </div>
            <div className='tstats'>
                <div className='tscore tnumber'>{targetPlayer.score}</div>
                <div className='tscore ttext'>Score</div>
                <div className='tgoal tnumber'>{targetPlayer.goals}</div>
                <div className='tgoal ttext'>Goals</div>
                <div className='tshot tnumber'>{targetPlayer.shots}</div>
                <div className='tshot ttext'>Shots</div>
                <div className='tassist tnumber'>{targetPlayer.assists}</div>
                <div className='tassist ttext' style={{transform: 'translate(170%,30%)'}}>Asst</div>
                <div className='tsave tnumber'>{targetPlayer.saves}</div>
                <div className='tsave ttext'>Saves</div>
            </div>  
        </div>*/

export default TargetPlayer;