import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { SECTIONS } from '../../config/site'
import type { SectionId } from '../../config/site'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { ParticleField } from '../backgrounds/ParticleField'
import { EmgWaveField } from '../backgrounds/EmgWaveField'
import { TurinSkyline } from '../backgrounds/TurinSkyline'
import { SpeedStreakField } from '../backgrounds/SpeedStreakField'
import './backgroundTint.css'

/* ============================================================================
   Fixed background that crossfades per section: a subtle colour tint plus the
   section's signature pattern (particles, EMG waves, Turin skyline, speed
   streaks). Only the active section's pattern animates; the rest hold a
   static frame.
   ========================================================================== */

interface SectionTint {
  /** "r,g,b" — primary tint, also drives the pattern. */
  tint: string
  /** "r,g,b" — secondary pattern colour. */
  tint2: string
}

const SECTION_TINT: Record<SectionId, SectionTint> = {
  hero: { tint: '124,140,248', tint2: '34,211,238' }, // indigo — site accent
  thesis: { tint: '34,211,238', tint2: '52,211,153' }, // cyan — neural interfaces
  participium: { tint: '196,65,90', tint2: '126,31,51' }, // bordeaux — project brand
  autostar: { tint: '248,113,113', tint2: '255,157,46' }, // red — motorsport
  about: { tint: '139,157,255', tint2: '34,211,238' }, // periwinkle
  contact: { tint: '124,140,248', tint2: '34,211,238' }, // indigo
}

function SectionPattern({
  id,
  active,
  reducedMotion,
}: {
  id: SectionId
  active: boolean
  reducedMotion: boolean
}) {
  const { tint, tint2 } = SECTION_TINT[id]
  const shared = { active, reducedMotion }

  switch (id) {
    case 'thesis':
      return <EmgWaveField {...shared} colorRgb={tint} color2Rgb={tint2} />
    case 'participium':
      return <TurinSkyline />
    case 'autostar':
      return <SpeedStreakField {...shared} colorRgb={tint} color2Rgb={tint2} />
    case 'about':
      return <ParticleField {...shared} colorRgb={tint} linkRgb={tint2} density={0.7} />
    case 'contact':
      return <ParticleField {...shared} colorRgb={tint} linkRgb={tint2} density={0.9} />
    case 'hero':
    default:
      return <ParticleField {...shared} colorRgb={tint} linkRgb={tint2} density={1} />
  }
}

/** Must cover the layer's CSS opacity transition (2.4s) plus a small margin. */
const CROSSFADE_MS = 2600

export function BackgroundTint({ activeId }: { activeId: SectionId }) {
  const reducedMotion = usePrefersReducedMotion()

  // Keep the outgoing section's pattern animating while its layer fades out,
  // so the crossfade never shows a frozen frame.
  const [fadingId, setFadingId] = useState<SectionId | null>(null)
  const prevRef = useRef(activeId)

  useEffect(() => {
    if (prevRef.current === activeId) return
    setFadingId(prevRef.current)
    prevRef.current = activeId
    const timer = window.setTimeout(() => setFadingId(null), CROSSFADE_MS)
    return () => window.clearTimeout(timer)
  }, [activeId])

  return (
    <div className="bg-tint" aria-hidden="true">
      {SECTIONS.map(({ id }) => {
        const active = id === activeId
        const animating = active || id === fadingId
        return (
          <div
            key={id}
            className={`bg-tint__layer ${active ? 'is-active' : ''}`}
            style={{ '--tint': SECTION_TINT[id].tint } as CSSProperties}
          >
            <SectionPattern id={id} active={animating} reducedMotion={reducedMotion} />
          </div>
        )
      })}
    </div>
  )
}
