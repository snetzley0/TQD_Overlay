// Clock component takes provides game_seconds and isOT to convert into a match time display

function Clock(props) {
    const { game_seconds, isOT } = props;
    const minutes = Math.floor(game_seconds / 60);
    const seconds = (game_seconds - minutes * 60).toString().padStart(2, '0');
    return isOT ? <div className="clock">+{minutes}:{seconds}</div> : <div className="clock">{minutes}:{seconds}</div>
}

/*
const { game_seconds, isOT } = props;
    const minutes = Math.floor(game_seconds / 60);
    const seconds = (game_seconds - minutes * 60).toString().padStart(2, '0');
    return isOT ? <div className="clock">+{minutes}:{seconds}</div> : <div className="clock">{minutes}:{seconds}</div>

if (isOT === true) return <div className="clock">+{minutes}:{seconds}</div>;
return <div className="clock">{minutes}:{seconds}</div>;
*/

// One potential shortcoming of this implementation is having to evaluate the if statement on every state refresh, may or may not actually be an issue

export default Clock;