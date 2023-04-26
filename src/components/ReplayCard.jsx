import isEmpty from "../functions/isEmpty";
import ReplayCardD from "../design/ReplayCardD";
import ReplayD from "../design/ReplayD";

const ReplayCard = (props) => {
    const { stats, target } = props;
    return (
        <>
        <style type="text/css">
        {`
        .goalCard {
            position: absolute;
            bottom: 3%;
            
            left: 50%;

            transform:  scale(var(--trythis)) translate(-50%,-50%);
            transform-origin: bottom left;
          }    

        .replayCard {
            position: absolute;
            bottom: 0.5em;
            left: 0.5em;

            animation-name: fadeIn;
            animation-duration: 0.3s;
            

            transform:  scale(var(--trythis)) translate(4%,0%);
            transform-origin: bottom left;
        }

        .replayCard.spectating {
            bottom: 5.5em;
        }

        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
        `}
        </style>
        
        <div className={`replayCard ${target && 'spectating'}`}><ReplayD/></div>
        <div className="goalCard"><ReplayCardD stats={stats}/></div>
        </>
    )
}

export default ReplayCard;