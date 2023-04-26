const ReplayD = (props) => {
    return (
        <>
        <style type="text/css">
        {``}
        </style>
        <svg
            width={176.183}
            height={59.505}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g transform="translate(-125.4 -715.37)">
            <path
                style={{
                fill: "#000",
                fillOpacity: 0.617341,
                strokeWidth: 0,
                strokeDasharray: "none",
                }}
                d="M125.401 715.37h176.183v59.505H125.401z"
            />
            <circle
                style={{
                fill: "#ff4242",
                fillOpacity: 1,
                strokeWidth: 0,
                strokeDasharray: "none",
                }}
                cx={165.09}
                cy={746.066}
                r={15}
            >
                <animate
                    attributeType="CSS"
                    attributeName="visibility"
                    from="visible"
                    to="hidden"
                    dur="1.5s"
                    repeatCount="indefinite"
                />
            </circle>
            <text
                xmlSpace="preserve"
                style={{
                fontSize: "27.1781px",
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "'sans-serif, Normal'",
                fill: "#ff4242",
                fillOpacity: 1,
                strokeWidth: 0,
                strokeDasharray: "none",
                }}
                x={187.012}
                y={753.657}
            >
                <tspan
                x={194.012}
                y={753.657}
                style={{
                    fill: "#ff4242",
                    fillOpacity: 1,
                    strokeWidth: 0,
                }}
                >
                {"Replay"}
                </tspan>
            </text>
            </g>
        </svg>
        </>
    )
}

export default ReplayD;