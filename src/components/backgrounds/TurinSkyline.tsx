import './turinSkyline.css'

/* ============================================================================
   Stylised Turin skyline for the Participium world.
   A flat, unlit black silhouette — like a paper-cut cityscape — anchored by the
   Mole Antonelliana, with a campanile and a faint Alpine ridge behind.
   ========================================================================== */

const VB_W = 1200
const VB_H = 360
const BASE = 360

interface Block {
  x: number
  w: number
  top: number
}

// Hand-placed silhouette so the composition reads intentionally, not random.
const BLOCKS: Block[] = [
  { x: 10, w: 64, top: 214 },
  { x: 78, w: 44, top: 168 },
  { x: 210, w: 96, top: 236 },
  { x: 312, w: 58, top: 192 },
  { x: 396, w: 76, top: 154 },
  { x: 478, w: 50, top: 222 },
  { x: 690, w: 84, top: 204 },
  { x: 780, w: 56, top: 150 },
  { x: 842, w: 104, top: 240 },
  { x: 952, w: 68, top: 186 },
  { x: 1026, w: 58, top: 214 },
  { x: 1090, w: 96, top: 158 },
]

export function TurinSkyline() {
  return (
    <div className="turin" aria-hidden="true">
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        className="turin__svg"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* Faint Alpine ridge behind the city */}
        <path
          className="turin__alps"
          d="M0 150 L80 96 L150 132 L210 70 L280 120 L360 60 L430 116 L520 78
             L600 124 L690 72 L770 118 L860 66 L940 120 L1030 84 L1110 126 L1200 92
             L1200 360 L0 360 Z"
        />
        <path
          className="turin__alps-line"
          d="M0 150 L80 96 L150 132 L210 70 L280 120 L360 60 L430 116 L520 78
             L600 124 L690 72 L770 118 L860 66 L940 120 L1030 84 L1110 126 L1200 92"
        />

        {/* City silhouette */}
        <g className="turin__city">
          {BLOCKS.map((b, i) => (
            <rect key={i} x={b.x} y={b.top} width={b.w} height={BASE - b.top} />
          ))}

          {/* Bell tower (campanile) with pyramidal cap */}
          <rect x="150" y="120" width="26" height="240" />
          <path className="turin__cap" d="M147 120 L163 92 L179 120 Z" />

          {/* ---- Mole Antonelliana (centerpiece, centered) ---- */}
          {/* base */}
          <rect x="556" y="236" width="84" height="124" />
          {/* temple / colonnade block */}
          <rect x="570" y="208" width="56" height="30" />
          {/* stepped pediment */}
          <rect x="578" y="194" width="40" height="16" />
          {/* pyramidal dome with concave sides */}
          <path d="M582 194 C590 160 598 130 598 94 C606 130 614 160 614 194 Z" />
          {/* tall tapering spire (aguglia) ending in a fine point */}
          <path d="M595 94 L598 40 L601 94 Z" />
        </g>
      </svg>
    </div>
  )
}
