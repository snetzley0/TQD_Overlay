const TargetPlayerBoost = (props) => {
    const { boost } = props;
    return (
        <>
        <style type="text/css">
        {`
        .testBar {
            background: green;
            height: 24px;
            width: 0;
            position: absolute;
            top: 50%;
            transition: width 0.12s;
            right: 0;
          }    
        `}
        </style>
        </>
    )
}

/*<div className="testBar" style={{width: boost + '%'}}>{boost}</div>*/

export default TargetPlayerBoost;





