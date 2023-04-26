import tqdicon from '../icons/TQD Default.png'

const TQDIconOrng = () => {
    return (
        <>
        <style type="text/css">
        {`
        .tqdIcon-boxorng {
            margin-top: .05%;
            background: black;
            width: 3%;
            height: 2.8vh;
            right: 0;
           
            clip-path: polygon(
                0 20%,
                10% 0,
                100% 0,
                100% 100%,
                10% 100%,
                0% 80%,
                0% 20%
              ) 
        }

        .tqdIconorng {
            margin-right: 22.5%;
            height: 100%;  
        }
        `}
        </style>
        <div className='tqdIcon-boxorng'>
            <img className='tqdIconorng' src={tqdicon}/>
        </div>
        </>
    )
}

/*
*/

export default TQDIconOrng