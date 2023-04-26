import tqdicon from '../icons/TQD Default Transparent Black.png'

const BoostMeterD = (props) => {
    const {boost, team, tqdtoggles} = props;
    const offset = (412-(boost/100 * 412)) + 59; //this value changed when changing scaling, so put a new base value (59)
    const isOrng = team;
    return (
        <>
        <svg
    width={100+'%'}
    height={100+'%'}
    viewBox="0 0 200 200"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
    <pattern id="tqdiconboost" patternUnits="userSpaceOnUse" width="200" height="200" >
                <image href={tqdicon} x="25" y="25" width="150" height="150"/>
            </pattern>

      {/*base gradient colors part 1*/}
      <linearGradient id="basegradient">
        <stop
          style={{
            stopColor: "#fff",
            stopOpacity: .9,
          }}
          offset={0}
        />
        <stop
          style={{
            stopColor: "#000",
            stopOpacity: 1,
          }}
          offset={1}
        />
      </linearGradient>

      {/*blue fill colors part 1*/}
      <linearGradient id="blueboostfill">
        <stop
          style={{stopColor: "#0000d6",stopOpacity: 1,}}
          offset={0}/><stop
          style={{stopColor: "#059cff",stopOpacity: 1,}}
          offset={1}/>
      </linearGradient>

      {/*blue fill colors part 2*/}
      <linearGradient
        xlinkHref="#blueboostfill"
        id="bboostfill"
        x1={0}
        y1={0}
        x2={200}
        y2={0}
        gradientUnits="userSpaceOnUse"
      />

      {/*orng fill colors part 1*/}
      <linearGradient id="orngboostfill">
        <stop
          style={{stopColor: "#d65200",stopOpacity: 1,}}
          offset={0}/><stop
          style={{stopColor: "#ffa76f",stopOpacity: 1,}}
          offset={1}/>
      </linearGradient>

      {/*orng fill colors part 2*/}
      <linearGradient
        xlinkHref="#orngboostfill"
        id="oboostfill"
        x1={0}
        y1={0}
        x2={200}
        y2={0}
        gradientUnits="userSpaceOnUse"
      />

      {/*base gradient colors part 2*/}
      <radialGradient
        xlinkHref="#basegradient"
        id="mbasegradient"
        cx={100}
        cy={100}
        fx={100}
        fy={100}
        r={100}
        gradientTransform="matrix(1 0 0 .9942 0 5.462)"
        gradientUnits="userSpaceOnUse"
      />
    </defs>

      {/*base circle*/}
      <circle
        style={{
          fill: isOrng ? "#281201" : "#090934",
          strokeOpacity: 0,
        }}
        cx="100"
        cy="100"
        r="100"
      />

      

      {/*base gradient circle */}
      <circle
        style={{
          fill: "url(#mbasegradient)",
          opacity: 0.1,
          strokeOpacity: 0,
        }}
        cx="100"
        cy="100"
        r="100"
      />

        {/*TQD - base circle*/}
      <circle
        style={{
          fill: isOrng ? (tqdtoggles[1]? "url(#tqdiconboost)":'') : (tqdtoggles[0]? "url(#tqdiconboost)":''),
          opacity: isOrng ? (tqdtoggles[1]? 0.2 :0) : (tqdtoggles[0]? 0.3: 0),
        }}
        cx="100"
        cy="100"
        r="100"
      />

      {/*empty boost fill*/}
      <path 
        style={{
          fillOpacity: 0,
          stroke: "#000",
          strokeOpacity: .6,
          strokeWidth: 26,
          strokeDasharray: "471 471",
          strokeDashoffset: 0,
        }}
        d="M100 187.5 a87.5 87.5 0 1 1 87.5 -87.5"
      />

      {/*boost fill*/}
      <path 
        style={{
          fillOpacity: 0,
          stroke: isOrng ? "url(#oboostfill)" : "url(#bboostfill)",
          strokeWidth: 26,
          strokeDasharray: "471 471",
          strokeDashoffset: offset.toString(),
          strokeOpacity: 1,
          transition: 'stroke-dashoffset 0.12s',
        }}
        d="M100 187.5 a87.5 87.5 0 1 1 87.5 -87.5"
      />

      {/*boost text*/}
      <text text-anchor="middle" dominantBaseline="middle"
          xmlSpace="preserve"
          style={{
          fontWeight: 30,
          fontSize: "60px",
          fontFamily: "sans-serif",
          InkscapeFontSpecification: "'sans-serif, Normal'",
          fill: "#fff",
          float: 'right',
          fontFamily: 'Consolas',
          transform: 'translate(0,0.1em)',
          }}
          x={100}
          y={100}
        >
          <tspan>
          {boost}
          </tspan>
      </text> 

      {/* texture, the little notches */}

      <line x1="100" x2="100" y1="0" y2="10" stroke="white" strokeWidth="1"/>
      <line x1="100" x2="100" y1="190" y2="200" stroke="white" strokeWidth="1"/>
      <line x1="0" x2="10" y1="100" y2="100" stroke="white" strokeWidth="1"/>
      <line x1="200" x2="190" y1="100" y2="100" stroke="white" strokeWidth="1"/>

      <line x1="34.3" x2="29.3" y1="34.3" y2="29.3" stroke="grey" strokeWidth=".8"/>
      <line x1="29.3" x2="34.3" y1="170.7" y2="165.7" stroke="grey" strokeWidth=".8"/>
      <line x1="170.7" x2="165.7" y1="29.3" y2="34.3" stroke="grey" strokeWidth=".8"/>
  
  </svg>
   </>    
    )
}

export default BoostMeterD;