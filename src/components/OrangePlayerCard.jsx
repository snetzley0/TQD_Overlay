import OrangePlayerCardDesign from '../design/OrangePlayerCardDesign';
import OrngEventCard from './OrngEventCard';

const OrangePlayerCard = (props) => {
    const { player, statfeed } = props;
    const mystatfeed = statfeed.filter(p => p.main_target.id == player.id);
    document.documentElement.style.setProperty('--trythis', `${window.innerWidth / 1920}`)
    return (
        <>
        <style type="text/css">
        {`
        .orangeteam {
            
            transform: scale(var(--trythis));
            transform-origin: top right;
            


            display: flex;
            flex-direction: column;
            position: absolute;
            align-items: flex-end;
            top: 2.5%;
            text-align: right;
            height: auto;
            width: 100%;
            overflow: hidden;
          }

        .moveorng {
            position: absolute;
            top: 50%;
            text-align: right;
            right: 50%;
        }
        .orngplayercard {
            
            text-align: right;
            right: 0;
            display: flex;
            flex-direction: row-reverse;
            justify-content: flex-end;
            margin-bottom: 0.1%;
        }

        .orng {
            position: relative;
            background: #000a27;
            float: left;
            width: 12.5%;
            aspect-ratio: 30/1;
            margin-right: 90%;
            padding: 1%;
            border: 1px dashed blue;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            margin-top: .5%;
        }
        
        .orngplayername {
            position: absolute;
            top: 10%;
            left: 5%;
        }

        .orngplayerboostnumber {
            position: absolute;
            right: 5%;
            top: 10%;
        }

        .orngplayerboost {
            background-color: #1259ff;
            position: absolute;
            height: 15%;
            width: 0;
            bottom: 0%;
            left: 0;
            transition: width 0.12s;
            border-radius: 0.2em;
        }
        
        .orngplayereventbox {
            display: flex;
            flex-direction: row-reverse;
            right: 294px;
            top: 0%;
            width: 223px;
            overflow: hidden;
        }    
        `}
        </style>

        {}
        

        <div className='orngplayercard'>
            <OrangePlayerCardDesign name={player.name} boost={player.boost}/>
            {mystatfeed && 
                <span className='orngplayereventbox'>
                {mystatfeed.map(event => 
                    <span><OrngEventCard statfeed={event.event_name}/></span>
                )}
                </span>   
            }        
        </div>
        
        
        
        </>
    )
}

export default OrangePlayerCard;