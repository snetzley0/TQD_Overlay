const PostGameStatsD = (props) => {
    const {blueteam, orngteam} = props;


    return (
        <>
     
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={100+'%'}
    height={100+'%'}
    viewBox="0 0 508 285.75"
    {...props}
  >
    <defs>
      <linearGradient id="b">
        <stop
          offset={0.497}
          style={{
            stopColor: "#0000c7",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.497}
          style={{
            stopColor: "#da6500",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient id="a">
        <stop
          offset={0}
          style={{
            stopColor: "#00009d",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.303}
          style={{
            stopColor: "#363696",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={0.7}
          style={{
            stopColor: "#975c36",
            stopOpacity: 1,
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: "#b05400",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#a"
        id="c"
        x1={0}
        x2={508}
        y1={142.875}
        y2={142.875}
        gradientUnits="userSpaceOnUse"
        spreadMethod="pad"
      />
      <linearGradient
        xlinkHref="#b"
        id="d"
        x1={233.324}
        x2={274.676}
        y1={89.649}
        y2={89.649}
        gradientTransform="matrix(1.10974 0 0 1.01062 -27.875 -1.525)"
        gradientUnits="userSpaceOnUse"
      />
    </defs>
    <rect
      width={508}
      height={285.75}
      ry={0.868}
      style={{
        fill: "url(#c)",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 7.40833,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M477.163 65.074H30.837"
      style={{
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#ccc",
        strokeWidth: 0.706001,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <text
      xmlSpace="preserve"
      x={241.168}
      y={82.971}
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: 400,
        fontStretch: "normal",
        fontSize: "7.05556px",
        fontFamily: "sans-serif",
        InkscapeFontSpecification: "&quot",
        fontVariantLigatures: "normal",
        fontVariantCaps: "normal",
        fontVariantNumeric: "normal",
        fontVariantEastAsian: "normal",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0.846562,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    >
      <tspan
        x={241.168}
        y={82.971}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontSize: "7.05556px",
          fontFamily: "sans-serif",
          InkscapeFontSpecification: "&quot",
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal",
          stroke: "none",
          strokeWidth: 0.846564,
          strokeOpacity: 1,
        }}
      >
        {"SCORE"}
      </tspan>
    </text>
    <rect
      width={45.89}
      height={2.923}
      x={231.055}
      y={86.615}
      style={{
        fill: (orngteam.score+blueteam.score===0)? "grey" : "#d45500",
        stroke: "#bfbfbf",
        strokeWidth: 0.288715,
      }}
    />
    <rect
      width={(orngteam.score+blueteam.score===0)? 0 : 45.89 * (blueteam.score/(blueteam.score + orngteam.score))}
      height={2.923}
      x={231.055}
      y={86.615}
      
      style={{
        fill: "#0023ef",
        stroke: "#bfbfbf",
        strokeWidth: 0.288715,
      }}
    />
    
    <text
      xmlSpace="preserve"
      x={241.869}
      y={104.077}
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: 400,
        fontStretch: "normal",
        fontSize: "7.05556px",
        fontFamily: "sans-serif",
        InkscapeFontSpecification: "&quot",
        fontVariantLigatures: "normal",
        fontVariantCaps: "normal",
        fontVariantNumeric: "normal",
        fontVariantEastAsian: "normal",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0.846562,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    >
      <tspan
        x={241.869}
        y={104.077}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontSize: "7.05556px",
          fontFamily: "sans-serif",
          InkscapeFontSpecification: "&quot",
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal",
          stroke: "none",
          strokeWidth: 0.846564,
          strokeOpacity: 1,
        }}
      >
        {"GOALS"}
      </tspan>
    </text>
    <rect
      width={45.89}
      height={2.923}
      x={231.055}
      y={108.615}
      style={{
        fill: (orngteam.goals+blueteam.goals===0)? "grey" : "#d45500",
        stroke: "#bfbfbf",
        strokeWidth: 0.288715,
      }}
    />
    
    <rect
      width={(blueteam.goals+orngteam.goals===0)? 0 : 45.89 * (blueteam.goals/(blueteam.goals + orngteam.goals))}
      height={2.923}
      x={231.055}
      y={108.615}
      
      style={{
        fill: "#0023ef",
        stroke: "#bfbfbf",
        strokeWidth: 0.288715,
      }}
    />

    <text
      xmlSpace="preserve"
      x={241.168}
      y={125.75}
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: 400,
        fontStretch: "normal",
        fontSize: "7.05556px",
        fontFamily: "sans-serif",
        InkscapeFontSpecification: "&quot",
        fontVariantLigatures: "normal",
        fontVariantCaps: "normal",
        fontVariantNumeric: "normal",
        fontVariantEastAsian: "normal",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0.846562,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    >
      <tspan
        x={241.168}
        y={125.75}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontSize: "7.05556px",
          fontFamily: "sans-serif",
          InkscapeFontSpecification: "&quot",
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal",
          stroke: "none",
          strokeWidth: 0.846564,
          strokeOpacity: 1,
        }}
      >
        {"SHOTS"}
      </tspan>
    </text>
    <rect
      width={45.89}
      height={2.923}
      x={231.055}
      y={129.615}
      style={{
        fill: (orngteam.shots+blueteam.shots===0)? "grey" : "#d45500",
        stroke: "#bfbfbf",
        strokeWidth: 0.288715,
      }}
    />
    <rect
      width={(orngteam.shots+blueteam.shots===0)? 0 : 45.89 * (blueteam.shots/(blueteam.shots + orngteam.shots))}
      height={2.923}
      x={231.055}
      y={129.615}
      
      style={{
        fill: "#0023ef",
        stroke: "#bfbfbf",
        strokeWidth: 0.288715,
      }}
    />

    <text
      xmlSpace="preserve"
      x={238.594}
      y={147.409}
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: 400,
        fontStretch: "normal",
        fontSize: "7.05556px",
        fontFamily: "sans-serif",
        InkscapeFontSpecification: "&quot",
        fontVariantLigatures: "normal",
        fontVariantCaps: "normal",
        fontVariantNumeric: "normal",
        fontVariantEastAsian: "normal",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0.846562,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    >
      <tspan
        x={238.594}
        y={147.409}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontSize: "7.05556px",
          fontFamily: "sans-serif",
          InkscapeFontSpecification: "&quot",
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal",
          stroke: "none",
          strokeWidth: 0.846564,
          strokeOpacity: 1,
        }}
      >
        {"ASSISTS"}
      </tspan>
    </text>
    <rect
      width={45.89}
      height={2.923}
      x={231.055}
      y={151.615}
      style={{
        fill: (orngteam.assists+blueteam.assists===0)? "grey" : "#d45500",
        stroke: "#bfbfbf",
        strokeWidth: 0.288715,
      }}
    />
    <rect
      width={(orngteam.assists+blueteam.assists===0)? 0 : 45.89 * (blueteam.assists/(blueteam.assists + orngteam.assists))}
      height={2.923}
      x={231.055}
      y={151.615}
      
      style={{
        fill: "#0023ef",
        stroke: "#bfbfbf",
        strokeWidth: 0.288715,
      }}
    />

    <text
      xmlSpace="preserve"
      x={242.309}
      y={167.798}
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: 400,
        fontStretch: "normal",
        fontSize: "7.05556px",
        fontFamily: "sans-serif",
        InkscapeFontSpecification: "&quot",
        fontVariantLigatures: "normal",
        fontVariantCaps: "normal",
        fontVariantNumeric: "normal",
        fontVariantEastAsian: "normal",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0.846562,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    >
      <tspan
        x={242.309}
        y={167.798}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontSize: "7.05556px",
          fontFamily: "sans-serif",
          InkscapeFontSpecification: "&quot",
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal",
          stroke: "none",
          strokeWidth: 0.846564,
          strokeOpacity: 1,
        }}
      >
        {"SAVES"}
      </tspan>
    </text>
    <rect
      width={45.89}
      height={2.923}
      x={231.055}
      y={171.615}
      style={{
        fill: (orngteam.saves+blueteam.saves===0)? "grey" : "#d45500",
        stroke: "#bfbfbf",
        strokeWidth: 0.288715,
      }}
    />
    <rect
      width={(orngteam.saves+blueteam.saves===0)? 0 : 45.89 * (blueteam.saves/(blueteam.saves + orngteam.saves))}
      height={2.923}
      x={231.055}
      y={171.615}
      
      style={{
        fill: "#0023ef",
        stroke: "#bfbfbf",
        strokeWidth: 0.288715,
      }}
    />

    <text
      xmlSpace="preserve"
      x={240.825}
      y={189.438}
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: 400,
        fontStretch: "normal",
        fontSize: "7.05556px",
        fontFamily: "sans-serif",
        InkscapeFontSpecification: "&quot",
        fontVariantLigatures: "normal",
        fontVariantCaps: "normal",
        fontVariantNumeric: "normal",
        fontVariantEastAsian: "normal",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0.846562,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    >
      <tspan
        x={240.825}
        y={189.438}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontSize: "7.05556px",
          fontFamily: "sans-serif",
          InkscapeFontSpecification: "&quot",
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal",
          stroke: "none",
          strokeWidth: 0.846564,
          strokeOpacity: 1,
        }}
      >
        {"DEMOS"}
      </tspan>
      </text>
    <rect
      width={45.89}
      height={2.923}
      x={231.055}
      y={193.615}
      style={{
        fill: (orngteam.demos+blueteam.demos===0)? "grey" : "#d45500",
        stroke: "#bfbfbf",
        strokeWidth: 0.288715,
      }}
    />
    <rect
      width={(orngteam.demos+blueteam.demos===0)? 0 : 45.89 * (blueteam.demos/(blueteam.demos + orngteam.demos))}
      height={2.923}
      x={231.055}
      y={193.615}
      
      style={{
        fill: "#0023ef",
        stroke: "#bfbfbf",
        strokeWidth: 0.288715,
      }}
    />

    <text
      xmlSpace="preserve"
      x={239.138}
      y={211.078}
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: 400,
        fontStretch: "normal",
        fontSize: "7.05556px",
        fontFamily: "sans-serif",
        InkscapeFontSpecification: "&quot",
        fontVariantLigatures: "normal",
        fontVariantCaps: "normal",
        fontVariantNumeric: "normal",
        fontVariantEastAsian: "normal",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0.846562,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    >
      <tspan
        x={239.138}
        y={211.078}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontSize: "7.05556px",
          fontFamily: "sans-serif",
          InkscapeFontSpecification: "&quot",
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal",
          stroke: "none",
          strokeWidth: 0.846564,
          strokeOpacity: 1,
        }}
      >
        {"SHOT %"}
      </tspan>
    </text>
    <rect
      width={45.89}
      height={2.923}
      x={231.055}
      y={215.615}
      style={{
        fill: (orngteam.shotPercent+blueteam.shotPercent===0)? "grey" : "#d45500",
        stroke: "#bfbfbf",
        strokeWidth: 0.288715,
      }}
    />
    
    <rect
      width={(orngteam.shotPercent+blueteam.shotPercent===0)? 0 : 45.89 * (blueteam.shotPercent/(blueteam.shotPercent + orngteam.shotPercent))}
      height={2.923}
      x={231.055}
      y={215.615}
      
      style={{
        fill: "#0023ef",
        stroke: "#bfbfbf",
        strokeWidth: 0.288715,
      }}
    />

    <text
      xmlSpace="preserve"
      x={237.076}
      y={233.15}
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: 400,
        fontStretch: "normal",
        fontSize: "7.05556px",
        fontFamily: "sans-serif",
        InkscapeFontSpecification: "&quot",
        fontVariantLigatures: "normal",
        fontVariantCaps: "normal",
        fontVariantNumeric: "normal",
        fontVariantEastAsian: "normal",
        fill: "#fff",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0.846562,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    >
      <tspan
        x={237.076}
        y={233.15}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontSize: "7.05556px",
          fontFamily: "sans-serif",
          InkscapeFontSpecification: "&quot",
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal",
          stroke: "none",
          strokeWidth: 0.846564,
          strokeOpacity: 1,
        }}
      >
        {"TOUCHES"}
      </tspan>
    </text>
    <rect
      width={45.89}
      height={2.923}
      x={231.055}
      y={237.615}
      style={{
        fill: (orngteam.touches+blueteam.touches===0)? "grey" : "#d45500",
        stroke: "#bfbfbf",
        strokeWidth: 0.288715,
      }}
    />
    <rect
      width={(orngteam.touches+blueteam.touches===0)? 0 : 45.89 * (blueteam.touches/(blueteam.touches + orngteam.touches))}
      height={2.923}
      x={231.055}
      y={237.615}
      
      style={{
        fill: "#0023ef",
        stroke: "#bfbfbf",
        strokeWidth: 0.288715,
      }}
    />

    <path
      d="M254 0v285.75ZM254 0v285.75z"
      style={{
        fill: "#fff",
        stroke: "none",
        strokeWidth: 0.36,
      }}
    />
  </svg>


        </>
    )
}

export default PostGameStatsD;