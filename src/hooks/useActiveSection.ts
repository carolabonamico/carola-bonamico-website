import { useEffect, useState } from 'react'
import { SECTIONS } from '../config/site'
import type { SectionId } from '../config/site'

/* ============================================================================
   Tracks which section is currently dominant in the viewport.
   Drives the navbar highlight, the progress rail, the crossfading background
   stack and the "context warp" overlay. Uses a single IntersectionObserver and
   reports the section with the greatest visible ratio.
   ========================================================================== */

export function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>(SECTIONS[0].id)

  useEffect(() => {
    const elements = SECTIONS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    )
    if (elements.length === 0) return

    const ratios = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        }

        // Pick the most-visible section, preserving document order on ties.
        let bestId = active
        let bestRatio = -1
        for (const { id } of SECTIONS) {
          const ratio = ratios.get(id) ?? 0
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        }
        if (bestRatio > 0) setActive(bestId)
      },
      // Sample many thresholds so the crossfade tracks scrolling smoothly.
      { threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // `active` is intentionally excluded: it is only a tie-break seed, and
    // including it would re-create the observer on every section change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return active
}
