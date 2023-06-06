const PostGamePlayerStats = (props) => {
    const {player} = props;
    
    return (
        <>
        <style type="text/css">
        {`
        .postGamePlayerName {
            flex-grow: 1.7;
            overflow: hidden;
            text-align: center;
        }
        
        .postGamePlayerStats {
            
            top: 20%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .postGameFlexOne {
            flex-grow: 1;
            
        }

        .overflowCenter {
            margin-left: -100%;
            margin-right: -100%;
            text-align: center;
            
        }
        `}
        </style>
        <div className="postGamePlayerStats">
        <div className="postGamePlayerName">
            <span className="overflowCenter" style={{
                // adjusts font size proportionally when text length is over 17
                fontSize: player.name.length>17? (1.5*(17/player.name.length))+"vw" : "1.5vw",
            }}>{player.name}</span>
        </div>
        
        <div className="postGameFlexOne">{player.score}</div>
        <div className="postGameFlexOne">{player.goals}</div>
        <div className="postGameFlexOne">{player.shots}</div>
        <div className="postGameFlexOne">{player.assists}</div>
        <div className="postGameFlexOne">{player.saves}</div>
        <div className="postGameFlexOne">{player.demos}</div>
        <div className="postGameFlexOne">{
         (player.shots? Math.floor((player.goals)/(player.shots)*100): 0)
        }</div>
        <div className="postGameFlexOne">{player.touches}</div>

        </div>
        
        
        </>
    )
}

export default PostGamePlayerStats;