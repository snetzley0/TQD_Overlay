import * as React from "react";

const BluePlayerCardDesign = (props) => {
    const {name, boost, mystatfeed} = props;
    const fadeOutTime = 5;
    return (
        <>
        {/*default  width: "293.98376",
                    height: "41.590775", */}
        <svg
        
        width={293.984}
        height={41.591}
        
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        >
            <g transform="translate(-1207.527 -215.307)">
            <path
                style={{
                fill: "#000a27",
                fillOpacity: 1,
                strokeWidth: 0.693518,
                }}
                d="M1207.527 215.307h293.984v41.591h-293.984z"
            />
            <text
                xmlSpace="preserve"
                style={{
                fontWeight: 400,
                fontSize: "18px",
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "'sans-serif, Normal'",
                fill: "#fff",
                }}
                x={1223.623}
                y={239.368}
            >
                <tspan>
                {name.toUpperCase()}
                </tspan>
            </text>  
            <text text-anchor="end"
                xmlSpace="preserve"
                style={{
                fontWeight: 400,
                fontSize: "21.3333px",
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "'sans-serif, Normal'",
                fill: "#fff",
                float: 'right',
                }}
                x={1485.623}
                y={239.368}
            >
                <tspan>
                {boost}
                </tspan>
            </text>   
            <rect
                style={{
                fill: "grey",
                fillOpacity: 0.3,
                stroke: "#8b8b8b",
                strokeWidth: 0.218941,
                strokeDasharray: "none",
                strokeOpacity: 1,
                transition: 'width 0.12s'
                }}
                width={260.8855}
                
                height={3.8900673}
                x={1224.0758}
                y={248.125}
                ry={1.945}
            />
            <rect
                style={{
                fill: "#1259ff",
                fillOpacity: 1,
                stroke: "#8b8b8b",
                strokeWidth: 0.218941,
                strokeDasharray: "none",
                strokeOpacity: 1,
                transition: 'width 0.12s'
                }}
                width={260.8855 * boost/100}
                
                height={3.8900673}
                x={1224.0758}
                y={248.125}
                ry={1.945}
            />
            </g>
            
        </svg>
        </>
    )
}
    
/*<rect
                style={{
                fill: "#0000d6",
                fillOpacity: 1,
                transition: 'width 0.12s'
                }}
                width={41.590775}
                height={41.590775}
                x={303}
                y={0}
                
            />*/

export default BluePlayerCardDesign;