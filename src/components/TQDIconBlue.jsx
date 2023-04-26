import tqdicon from '../icons/TQD Default.png'

const TQDIconBlue = () => {
    return (
        <>
        <style type="text/css">
        {`
        .tqdIcon-boxblue {
            margin-top: .05%;
            background: black;
            width: 3%;
            height: 2.8vh;
            left: 0;
           
            clip-path: polygon(
                0 0%,
                
                90% 0,
                100% 20%,
                100% 80%,
                90% 100%,
                0% 100%,
                0% 0%
              ) 
        }

        .tqdIconblue {
            
            height: 100%;  
        }
        `}
        </style>
        <div className='tqdIcon-boxblue'>
            <img className='tqdIconblue' src={tqdicon}/>
        </div>
        </>
    )
}

/*
*/

export default TQDIconBlue