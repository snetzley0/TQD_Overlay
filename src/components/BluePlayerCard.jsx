
import BluePlayerCardDesign from '../design/BluePlayerCardDesign';
import BlueEventCard from './BlueEventCard';

const BluePlayerCard = (props) => {
    const { player, statfeed, prevstatfeed } = props;
    const mystatfeed = statfeed.filter(p => p.main_target.id == player.id);

    return (
        <>
        <style type="text/css">
        {`
        

        .blue {
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
        
        .blueplayername {
            position: absolute;
            top: 10%;
            left: 5%;
        }

        .blueplayerboostnumber {
            position: absolute;
            right: 5%;
            top: 10%;
        }

        .blueplayerboost {
            background-color: #1259ff;
            position: absolute;
            height: 15%;
            width: 0;
            bottom: 0%;
            left: 0;
            transition: width 0.12s;
            border-radius: 0.2em;
        }

        .blueteam {
            transform: scale(var(--trythis));
            transform-origin: top left;
            
           position: absolute;
           top: 2.5%;
           
           height: auto;
            width: 100%;
          }

        .blueplayercard {
            text-align: left;
            left: 0;
            display: flex;
            flex-direction: row;
            margin-bottom: 0.1%;
        }
        
        .blueplayereventbox {
            display: flex;
            left: 294px;
            top: 0%;
            width: 223px;
            overflow: hidden;
        }    

        
        `}
        </style>

        
        <div className='blueplayercard'>
            <BluePlayerCardDesign name={player.name} boost={player.boost} statfeed={mystatfeed}/>
            {mystatfeed && 
                <span className='blueplayereventbox'>
                {mystatfeed.map(event => 
                    <span><BlueEventCard statfeed={event.event_name}/></span>
                )}
                </span>   
            }       
        </div>
        </>
    )
}

/*
.blueteam {
            top: 2.5%;
            border: 1px solid green;
            position: absolute;
            height: 20%;
            width: 40%;
          }

        .blueplayercard {
            border: 1px solid pink;
            height: 20%;
            left: 0;
            margin-bottom: 0.5%;
        }

        .bluecard {
            
            height: 100%;
            
            float: left;
            
            border: 1px solid red;
        }
        
        .blueplayereventbox {
            border: 1px solid orange;
            display: flex;
            
            height: 100%;
            transform: translate(0%, 0%)
        }    
*/

export default BluePlayerCard;