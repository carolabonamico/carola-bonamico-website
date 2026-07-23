import { motion } from 'framer-motion'
import { useTranslation } from '../../i18n/LanguageContext'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import './neckElectrodes.css'

/* ============================================================================
   Signature thesis visual: a stylised head-and-neck profile (line-art) wearing
   the EMG electrode band, with the decoder readout card beside it. The band is
   a horizontal strip, symmetric about the head's vertical axis (x = 240).
   ========================================================================== */

// Front-facing head-and-shoulders silhouette (rounded head, ears, neck,
// sloping shoulders) — shaped after the reference avatar.
const HEAD_PATH =
  'M242 58 C300 58 338 92 340 146 C342 158 340 170 334 182 C342 184 345 194 337 202 ' +
  'C330 240 320 250 308 258 C302 266 297 272 296 284 C296 304 296 324 298 344 ' +
  'C306 360 330 374 366 398 C378 406 386 432 388 478 L92 478 C94 432 102 406 114 398 ' +
  'C150 374 174 360 182 344 C184 324 184 304 184 284 C183 272 178 266 172 258 ' +
  'C160 250 150 240 143 202 C135 194 138 184 146 182 C140 170 138 158 140 146 ' +
  'C142 92 184 58 242 58 Z'

// Electrode grid over the front of the neck (infrahyoid), symmetric about
// x = 240, plus two lateral electrodes (sternocleidomastoid) on the same row.
const ELECTRODES: { x: number; y: number; lateral?: boolean }[] = [
  { x: 214, y: 286 }, { x: 240, y: 286 }, { x: 266, y: 286 },
  { x: 214, y: 308 }, { x: 240, y: 308 }, { x: 266, y: 308 },
  { x: 214, y: 330 }, { x: 240, y: 330 }, { x: 266, y: 330 },
  { x: 192, y: 308, lateral: true }, { x: 288, y: 308, lateral: true },
]

const CHANNELS: [number, number][] = [
  [0, 3], [1, 4], [2, 5],
  [3, 6], [4, 7], [5, 8],
]

export function NeckElectrodes() {
  const t = useTranslation()
  const reduced = usePrefersReducedMotion()
  const anim = t.thesis.anim

  return (
    <div className="neck-viz">
      <svg
        viewBox="70 40 340 440"
        className="neck-svg"
        role="img"
        aria-label="Stylised head and shoulders, front view, wearing an EMG electrode band, decoding silent speech into text"
      >
        {/* Head, neck and shoulders silhouette (front view), drawing itself in */}
        <motion.path
          className="neck-profile"
          d={HEAD_PATH}
          fill="rgba(255,255,255,0.03)"
          stroke="rgba(238,241,248,0.45)"
          strokeWidth="2"
          strokeLinejoin="round"
          initial={reduced ? false : { pathLength: 0, opacity: 0 }}
          whileInView={reduced ? undefined : { pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />

        {/* Electrode band: horizontal strip, symmetric about x = 240 */}
        <rect
          className="neck-band"
          x="180"
          y="268"
          width="120"
          height="80"
          rx="12"
          fill="rgba(124,140,248,0.05)"
          stroke="rgba(124,140,248,0.22)"
          strokeWidth="1"
        />

        {/* Differential channels */}
        <g className="neck-channels">
          {CHANNELS.map(([a, b], i) => (
            <line
              key={i}
              x1={ELECTRODES[a].x}
              y1={ELECTRODES[a].y}
              x2={ELECTRODES[b].x}
              y2={ELECTRODES[b].y}
              style={{ animationDelay: `${i * 0.32}s` }}
            />
          ))}
        </g>

        {/* Electrodes */}
        <g className="neck-electrodes">
          {ELECTRODES.map((e, i) => (
            <g
              key={i}
              className={`electrode ${e.lateral ? 'electrode--lateral' : ''}`}
              style={{ animationDelay: `${(i % 6) * 0.28}s` }}
            >
              <circle className="electrode__ring" cx={e.x} cy={e.y} r="9" />
              <circle className="electrode__core" cx={e.x} cy={e.y} r="4" />
            </g>
          ))}
        </g>

        {/* Signal lead from the band toward the decoder readout on the right */}
        <path
          className="neck-lead"
          d="M300 308 L404 308"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.5"
          strokeDasharray="4 5"
        />
      </svg>

      {/* Readout card, beside the figure */}
      <div className="neck-readout">
        <div className="neck-readout__row">
          <span className="neck-chip neck-chip--on">{anim.vocalized}</span>
          <span className="neck-chip">{anim.silent}</span>
          <span className="neck-readout__channels mono">{anim.channels}</span>
        </div>

        <div className="neck-trace" aria-hidden="true">
          <svg viewBox="0 0 220 44" preserveAspectRatio="none">
            <polyline
              className="neck-trace__line"
              points="0,22 14,22 20,8 26,36 32,14 38,30 44,22 70,22 76,10 82,34 88,18 94,22 130,22 136,6 142,38 148,16 154,28 160,22 220,22"
            />
          </svg>
        </div>

        <div className="neck-decoder">
          <span className="neck-decoder__label mono">{anim.decoding}</span>
          <span className="neck-decoder__out">
            {anim.output}
            <span className="neck-caret" aria-hidden="true" />
          </span>
        </div>

        <p className="neck-caption">{anim.caption}</p>
      </div>
    </div>
  )
}
