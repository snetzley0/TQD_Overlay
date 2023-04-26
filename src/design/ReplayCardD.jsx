import goalImage from '../stat-icons/goal.svg'
import asstImage from '../stat-icons/assist.svg'
import shotImage from '../stat-icons/shot-on-goal.svg'

const ReplayCardD = (props) => {
    const { stats } = props;
    const isOrng = stats.scorer.teamnum;
    const isAssist = stats.assister.id !== '';
    return (
        <>
        <svg
            width={634.95}
            height={52.052}
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <defs>
            <linearGradient id="replaytop">
                <stop
                style={{
                    stopColor: isOrng ? "#522900" : "#0b0052",
                    stopOpacity: 1,
                }}
                offset={0}
                />
                <stop
                style={{
                    stopColor: isOrng ? "#281101" : "#050029",
                    stopOpacity: 1,
                }}
                offset={1}
                />
            </linearGradient>
            <linearGradient
                xlinkHref="#replaytop"
                id="replaytopb"
                gradientUnits="userSpaceOnUse"
                x1={960}
                y1={821.772}
                x2={960}
                y2={780.181}
                gradientTransform="translate(0 -94.384)"
            />
            </defs>
            <path
            style={{
                fill: isOrng ? "#d45500" : "#0024f0",
                fillOpacity: 1,
                strokeWidth: 0.511155,
            }}
            d="M642.525 727.388h634.95v10.461h-634.95z"
            transform="translate(-642.525 -687.797)"
            />
            <path
            style={{
                fill: "url(#replaytopb)",
                fillOpacity: 1,
                strokeWidth: 1.01922,
            }}
            d="M642.525 685.797h634.95v41.591h-634.95z"
            transform="translate(-642.525 -685.797)"
            />
            <text
            xmlSpace="preserve"
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 18,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "'sans-serif, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
                fill: "#fff",
            }}
            x={isAssist? 70 : 160}
            y={28}
            >
                {(stats.scorer.name).toUpperCase()}
            </text>
            <image
                xlinkHref={goalImage}
                alt=""
                class="filter"
                width={35}
                height={35}
                x={isAssist ? 30 : 120}
                y={2}
            />
            {isAssist ? 
            <image
                xlinkHref={asstImage}
                alt=""
                class="filter"
                width={30}
                height={30}
                x={260}
                y={6}
            /> : null}
            {isAssist ? 
            <text
            xmlSpace="preserve"
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 18,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "'sans-serif, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
                fill: "#fff",
            }}
            x={300}
            y={28}
            >
                {(stats.assister.name).toUpperCase()}
            </text> : null}
            <image
                xlinkHref={shotImage}
                alt=""
                class="filter"
                width={35}
                height={35}
                x={isAssist? 500 : 390}
                y={2}
            />
            <text
            xmlSpace="preserve"
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 400,
                fontStretch: "normal",
                fontSize: 18,
                fontFamily: "sans-serif",
                InkscapeFontSpecification: "'sans-serif, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
                fill: "#fff",
            }}
            x={isAssist ? 540 : 435}
            y={28}
            >
                {Math.floor(stats.goalspeed) + ' KPH'}
            </text>
            
        </svg>
        </>
    )
}

export default ReplayCardD;