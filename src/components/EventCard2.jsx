const EventCard2 = (props) => {
    const {statfeed} = props;

    return (
        <>
        <style type="text/css">
        {`


        .fade-in-event {
            animation: fadeIn 2s;
            animation: fadeOut 1s 5s;
        }
        @keyframes fadeIn {
            0% { opacity: 0; right: 20%; }
            100% { opacity: 1; right: 0%; }
        }
        @keyframes fadeOut {
            0% { opacity: 1; }
            100% { opacity: 0; }
        }

        
        `}
        </style>

        <span className="fade-in-event">{statfeed}</span>
        </>
    )
}

export default EventCard2;