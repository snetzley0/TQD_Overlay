import TQDIcon from '../icons/TQD Default Transparent Cleanup.png';

const TargetPlayerStatDesign = (props) => {
  const {targetPlayer, tqdtoggles} = props;
  const isOrng = targetPlayer.team;
  return (
    <svg 
    width={100+'%'}
    height={100+'%'}
    viewBox="0 0 852.587 59.654"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
            <pattern id="tqdiconname" patternUnits="userSpaceOnUse" width="500" height="500" >
                <image href={TQDIcon} x="-110" y="-60" width="400" height="400"/>
            </pattern>
        <linearGradient id="namebox">
          <stop
            style={{
              stopColor: isOrng ? "#db5f00" : "#0000d6",
              stopOpacity: 1,
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: isOrng ? "#853300" : "#090085",
              stopOpacity: 1,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient id="statbox">
          <stop
            style={{
              stopColor: isOrng ? "#291000" : "#040029",
              stopOpacity: 1,
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: isOrng ? "#501f00" : "#0a0050",
              stopOpacity: 1,
            }}
            offset={0.806}
          />
        </linearGradient>
        <linearGradient
          xlinkHref="#statbox"
          id="statboxd"
          gradientUnits="userSpaceOnUse"
          x1={470.857}
          y1={99.719}
          x2={880.933}
          y2={99.719}
          gradientTransform="matrix(-1.3622 0 0 -1.70281 1493.987 1227.248)"
        />
        <linearGradient
          xlinkHref="#namebox"
          id="nameboxc"
          x1={146.992}
          y1={1020.346}
          x2={146.992}
          y2={1080}
          gradientUnits="userSpaceOnUse"
        />
      </defs>
      <g transform="translate(0 -1020.346)">
        <path
          style={{
            fill: "url(#nameboxc)",
            fillOpacity: 1,
            strokeWidth: 0.830572,
          }}
          d="M0 1020.346h293.984V1080H0z"
        />
        {/*<path
                style={{
                fill: isOrng ? (tqdtoggles[1]? "url(#tqdiconname)":'') : (tqdtoggles[0]? "url(#tqdiconname)":''),
                fillOpacity: isOrng ? (tqdtoggles[1]? 0.12 :0) : (tqdtoggles[0]? 0.15: 0),
                }}
                d="M0 1020.346h293.984V1080H0z"
              />*/}
        
        <path
          style={{
            fill: "url(#statboxd)",
            fillOpacity: 1,
            strokeWidth: 2.27636,
          }}
          d="M293.984 1080v-45.108h525.661L852.587 1080Z"
        />
        <rect
          style={{
            fill: "black",
            fillOpacity: 0.4,
            stroke: "#8b8b8b",
            strokeWidth: 0.231997,
            strokeDasharray: "none",
            strokeOpacity: 1,
            transition: 'width 0.12s'
          }}
          width={260.885}
          height={4.368}
          x={15.174}
          y={1063.762}
          ry={2.184}
        />
        <rect
          style={{
            fill: "#fff",
            fillOpacity: 1,
            stroke: "#8b8b8b",
            strokeWidth: 0.231997,
            strokeDasharray: "none",
            strokeOpacity: 1,
            transition: 'width 0.12s'
          }}
          width={260.885 * targetPlayer.boost/100}
          height={4.368}
          x={15.174}
          y={1063.762}
          ry={2.184}
        />
        
      </g>
    </svg>

  )   
}
  
  export default TargetPlayerStatDesign;