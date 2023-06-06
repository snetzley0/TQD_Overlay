import Clock from '../components/Clock';
import TQDIcon from '../icons/TQD Default Transparent Cleanup.png';

const ScoreBugD = (props) => {
    const { time, teamnames, score, isot, matchscore, matchtype, tqdtoggles } = props;

    /*
    width: 918.255
    height: 101.471
    */

      return (
        <svg
        width={100+'%'}
        height={100+'%'}
        viewBox="0 0 918.255 101.471"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <defs>
            {/*<pattern id="icon" patternUnits="userSpaceOnUse" width="500" height="500" >
                <image href={TQDIcon} x="10" y="-100" width="500" height="500"/>
      </pattern>*/}
            <pattern id="iconorng" patternUnits="userSpaceOnUse" width="500" height="500" >
                <image href={TQDIcon} x="20" y="-60" width="400" height="400"/>
            </pattern>
            <pattern id="iconblue" patternUnits="userSpaceOnUse" width="500" height="500" >
                <image href={TQDIcon} x="-100" y="-60" width="400" height="400"/>
            </pattern>
            <linearGradient id="h">
                {/*blue match score*/}
                <stop
                style={{
                    stopColor: "#00062a",
                    stopOpacity: 1,
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
            <linearGradient id="g">
                {/*orange match score*/}
                <stop
                style={{
                    stopColor: "#000",
                    stopOpacity: 1,
                }}
                offset={0}
                />
                <stop
                style={{
                    stopColor: "#291000",
                    stopOpacity: 1,
                }}
                offset={1}
                />
            </linearGradient>
            <linearGradient id="f">
                {/*orange name plate*/}
                <stop
                style={{
                    stopColor: "#dd5f00",
                    stopOpacity: 1,
                }}
                offset={0}
                />
                <stop
                style={{
                    stopColor: "#853200",
                    stopOpacity: 1,
                }}
                offset={1}
                />
            </linearGradient>
            <linearGradient id="e">
                {/*blue name plate*/}
                <stop
                style={{
                    stopColor: "#0000d4",
                    stopOpacity: 1,
                }}
                offset={0}
                />
                <stop
                style={{
                    stopColor: "#0a0087",
                    stopOpacity: 1,
                }}
                offset={1}
                />
            </linearGradient>
            <linearGradient
                xlinkHref="#e"
                id="i"
                x1={617.849}
                y1={0}
                x2={617.849}
                y2={86.473}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1 0 0 .69253 30.015 26.297)"
            />
            <linearGradient
                xlinkHref="#f"
                id="j"
                x1={1337.941}
                y1={0}
                x2={1337.941}
                y2={86.473}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1 0 0 .69253 -65.806 26.297)"
            />
            <linearGradient
                xlinkHref="#g"
                id="k"
                x1={470.857}
                y1={99.719}
                x2={880.933}
                y2={99.719}
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1 0 0 .84432 30.015 13.172)"
            />
            <linearGradient
                xlinkHref="#h"
                id="l"
                gradientUnits="userSpaceOnUse"
                x1={1018.548}
                y1={99.719}
                x2={1428.623}
                y2={99.719}
                gradientTransform="matrix(1 0 0 .84432 -9.496 13.172)"
            />
            </defs>
            
            <g transform="translate(-500.873 -13.172)">
            <path
                style={{
                fill: "#101010",
                fillOpacity: 1,
                strokeWidth: 1.08462,
                }}
                d="M873.211 13.172h173.579v73.011H873.211z"
            />
            <path
                style={{
                fill: "#101010",
                fillOpacity: 1,
                strokeWidth: 1.08462,
                transform: "translateY(-1px)" // temp
                }}
                d="M873.211 13.172h173.579v73.011H873.211z"
            />
            <path
                style={{
                fill: "url(#i)",
                fillOpacity: 1,
                strokeWidth: 0.832185,
                }}
                d="M500.873 26.297h293.984v59.885H500.873z"
            />
            <path
                style={{
                fill: "url(#iconblue)",
                fillOpacity: tqdtoggles[0]? 0.15 : 0,
                }}
                d="M500.873 26.297h293.984v59.885H500.873z"
            />
            <path
                style={{
                fill: "#0023ef",
                fillOpacity: 1,
                strokeWidth: 0.471425,
                }}
                d="M795.828 13.172h77.382v73.011h-77.382z"
            />
            <path
                style={{
                fill: "#d45500",
                fillOpacity: 1,
                strokeWidth: 0.471425,
                }}
                d="M1046.789 13.172h77.382v73.011h-77.382z"
            />
            <path
                style={{
                fill: "url(#j)",
                fillOpacity: 1,
                strokeWidth: 0.832185,
                
                }}
                d="M1125.143 26.297h293.984v59.885h-293.984z"
            />
            <path
                style={{
                fill: "url(#iconorng)",
                fillOpacity: tqdtoggles[1]? 0.12 : 0,
                }}
                d="M1125.143 26.297h293.984v59.885h-293.984z"
            />
            
            
            
            
            
           
            {matchtype=='Scrim'? 
            
            <>
            <path
                style={{
                fill: "url(#k)",
                fillOpacity: 1,
                strokeWidth: 1.37338,
                transform: "translateY(-1px)" // temp
                }}
                d="M1009.051 86.183
                l 0 28
                l 50 0
                l 15 -15
                l 334 0
                l 12 -12
                z"
            />
            <path
                style={{
                fill: "url(#l)",
                fillOpacity: 1,
                strokeWidth: 1.37338,
                transform: "translateY(-1px)" // temp
                }}
                d="M 910.949 86.183 
                l 0 28 
                l -50 0
                l -15 -15
                l -334 0
                l -12 -12
                z"
            />
            <text textAnchor="middle"
                xmlSpace="preserve"
                style={{
                fontSize: "20px",
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "'sans-serif, Normal'",
                fill: "#e0e0e0",
                float: 'right',
                }}
                
                x={870}
                y={108}
            >
                <tspan>
                {matchscore[0]}
                </tspan>
            </text>
            <text textAnchor="middle"
                xmlSpace="preserve"
                style={{
                fontSize: "20px",
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "'sans-serif, Normal'",
                fill: "#e0e0e0",
                float: 'right',
                }}
                
                x={1050}
                y={108}
            >
                <tspan>
                {matchscore[1]}
                </tspan>
            </text>
            </>
            : 
            <>
            <path
                style={{
                fill: "url(#k)",
                fillOpacity: 1,
                strokeWidth: 1.37338,
                transform: "translateY(-1px)" // temp
                }}
                d="M1009.051 86.183v22.366h385.893l24.183-22.366z"
            />
            <path
                style={{
                fill: "url(#l)",
                fillOpacity: 1,
                strokeWidth: 1.37338,
                transform: "translateY(-1px)" // temp
                }}
                d="M910.949 86.183v22.366H525.056l-24.183-22.366z"
            />
            <rect
                style={{
                fill: matchscore[1]>=1 ? "#d45500" : "#fff",
                fillOpacity: matchscore[1]>=1 ? 1 : 0.0680851,
                stroke: "#656565",
                strokeWidth: 0.230636,
                strokeDasharray: "none",
                strokeOpacity: 1,
                }}
                width={47.86}
                height={8.422}
                x={1057.34}
                y={93.155}
                ry={3.275}
            />
            <rect
                style={{
                fill: matchscore[1]>=2 ? "#d45500" : "#fff",
                fillOpacity: matchscore[1]>=2 ? 1 : 0.0680851,
                stroke: "#656565",
                strokeWidth: 0.230636,
                strokeDasharray: "none",
                strokeOpacity: 1,
                }}
                width={47.86}
                height={8.422}
                x={1121.867}
                y={93.155}
                ry={3.275}
            />
            <rect
                style={{
                fill: matchscore[1]>=3 ? "#d45500" : "#fff",
                fillOpacity: matchscore[1]>=3 ? 1 : 0.0680851,
                stroke: "#656565",
                strokeWidth: 0.230636,
                strokeDasharray: "none",
                strokeOpacity: 1,
                }}
                width={47.86}
                height={8.422}
                x={1186.395}
                y={93.155}
                ry={3.275}
            />
            {matchtype==='Best of 5'? '' : <rect
                style={{
                fill: matchscore[1]>=4 ? "#d45500" : "#fff",
                fillOpacity: matchscore[1]>=4 ? 1 : 0.0680851,
                stroke: "#656565",
                strokeWidth: 0.230636,
                strokeDasharray: "none",
                strokeOpacity: 1,
                }}
                width={47.86}
                height={8.422}
                x={1250.922}
                y={93.155}
                ry={3.275}
            />}
            {matchtype==='Best of 5'? '' : <rect
                style={{
                fill: matchscore[0]>=4 ? "#0023ef" : "#fff",
                fillOpacity: matchscore[0]>=4 ? 1 : 0.0680851,
                stroke: "#656565",
                strokeWidth: 0.230636,
                strokeDasharray: "none",
                strokeOpacity: 1,
                }}
                width={47.86}
                height={8.422}
                x={621.218}
                y={93.155}
                ry={3.275}
            />}
            <rect
                style={{
                fill: matchscore[0]>=3 ? "#0023ef" : "#fff",
                fillOpacity: matchscore[0]>=3 ? 1 : 0.0680851,
                stroke: "#656565",
                strokeWidth: 0.230636,
                strokeDasharray: "none",
                strokeOpacity: 1,
                }}
                width={47.86}
                height={8.422}
                x={685.745}
                y={93.155}
                ry={3.275}
            />
            <rect
                style={{
                fill: matchscore[0]>=2 ? "#0023ef" : "#fff",
                fillOpacity: matchscore[0]>=2 ? 1 : 0.0680851,
                stroke: "#656565",
                strokeWidth: 0.230636,
                strokeDasharray: "none",
                strokeOpacity: 1,
                }}
                width={47.86}
                height={8.422}
                x={750.272}
                y={93.155}
                ry={3.275}
            />
            <rect
                style={{
                fill: matchscore[0]>=1 ? "#0023ef" : "#fff",
                fillOpacity: matchscore[0]>=1 ? 1 : 0.0680851,
                stroke: "#656565",
                strokeWidth: 0.230636,
                strokeDasharray: "none",
                strokeOpacity: 1,
                }}
                width={47.86}
                height={8.422}
                x={814.8}
                y={93.155}
                ry={3.275}
            />
            </>
            }
            <path
                style={{
                fill: isot? "#ad1a1a":"#000",
                fillOpacity: 1,
                strokeWidth: 1.926282,
                transform: "translate(0px,-1px)",
                }}
                d="m873.21 86.484 25.416 28.159h122.75l25.413-28.16z"
            />
            
            <path
                style={{
                fill: "#b1b1b1",
                fillOpacity: 1,
                strokeWidth: 1.566406,
                }}
                transform="scale(-1 1)"
                d="M-1046.789 86.183h173.579v.301h-173.579z"
            />
            </g>
            {/*<image href={TQDIcon} 
                style={{
                    opacity: 0.1,
            }}
            width={400+"px"}
            height={400+"px"}
            x={560}
            y={-120}/>
        */}
            <line x1="294" y1="0" x2="294" y2="72" stroke="white" style={{strokeWidth: 1.4}}/>
            <line x1="623" y1="0" x2="623" y2="72" stroke="white" style={{strokeWidth: 1.4}}/>
            <text textAnchor="middle"
                xmlSpace="preserve"
                style={{
                fontWeight: 400,
                fontSize: "28px",
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "'sans-serif, Normal'",
                fill: "white",
                float: 'right',
                }}
                x={160}
                y={55}
            >
                <tspan>
                {teamnames[0]}
                </tspan>
            </text>
            <text textAnchor="middle"
                xmlSpace="preserve"
                style={{
                fontWeight: 400,
                fontSize: "28px",
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "'sans-serif, Normal'",
                fill: "white",
                float: 'right',
                }}
                x={770}
                y={55}
            >
                <tspan>
                {teamnames[1]}
                </tspan>
            </text>
            <text textAnchor="middle"
                xmlSpace="preserve"
                style={{
                fontWeight: 400,
                fontSize: "50px",
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "'sans-serif, Normal'",
                fill: "white",
                float: 'right',
                }}
                x={335}
                y={55}
            >
                <tspan>
                {score[0]}
                </tspan>
            </text>
            <text textAnchor="middle"
                xmlSpace="preserve"
                style={{
                fontWeight: 400,
                fontSize: "50px",
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "'sans-serif, Normal'",
                fill: "white",
                float: 'right',
                }}
                x={585}
                y={55}
            >
                <tspan>
                {score[1]}
                </tspan>
            </text>
            <text textAnchor="middle"
                xmlSpace="preserve"
                style={{
                fontWeight: 400,
                fontSize: "50px",
                fontFamily: "Consolas",
                InkscapeFontSpecification: "'sans-serif, Normal'",
                fill: "white",
                float: 'right',
                }}
                x={460}
                y={55}
            >
                <tspan>
                {time}
                </tspan>
            </text>

            <text textAnchor="middle"
                xmlSpace="preserve"
                style={{
                fontWeight: 400,
                fontSize: "18px",
                fontFamily: "Consolas",
                InkscapeFontSpecification: "'sans-serif, Normal'",
                fill: "white",
                float: 'right',
                }}
                x={460}
                y={93}
            >
                <tspan>
                {isot? 'Overtime': matchtype}
                </tspan>
            </text>
            
        </svg>
    )
}

export default ScoreBugD;