const OrangePlayerCardDesign = (props) => {
  const {name, boost} = props;
    
    return (
    <svg
      width={293.984}
      height={41.591}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
        <rect
                style={{
                fill: "#281201",
                fillOpacity: 1,
                strokeWidth: 0.693518,
                strokeDasharray: "none",
                strokeOpacity: 1,
                }}
                width={293.984}  
                height={41.591}
                x={0}
                y={0}
            />
        <text
                xmlSpace="preserve"
                style={{
                fontWeight: 400,
                fontSize: "21.3333px",
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "'sans-serif, Normal'",
                fill: "#fff",
                }}
                x={15}
                y={25}
            >
                <tspan>
                {boost}
                </tspan>
            </text>  
            <text text-anchor="end"
                xmlSpace="preserve"
                style={{
                fontWeight: 400,
                fontSize: "18px",
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "'sans-serif, Normal'",
                fill: "#fff",
                float: 'right',
                }}
                x={278}
                y={25}
            >
                <tspan>
                {name.toUpperCase()}
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
                x={16}
                y={32}
                ry={1.945}
            />  
            <rect
              style={{
                fill: "#d26003",
                fillOpacity: 1,
                stroke: "#8b8b8b",
                strokeWidth: 0.218941,
                strokeDasharray: "none",
                strokeOpacity: 1,
                transition: 'width 0.12s',
                transform: 'scale(-1,1)',
                transformOrigin: 'center',
              }}
              width={260.8855 * boost/100}
              height={3.89}
              x={16}
              y={32}
              ry={1.945}
            />
    </svg>
    )        
}
  
  export default OrangePlayerCardDesign;