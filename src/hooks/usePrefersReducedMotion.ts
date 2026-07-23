import { useEffect, useState } from 'react'

/* ============================================================================
   Reports the user's "reduce motion" OS preference and keeps it live.
   Heavy animations (canvas loops, autoplay video, warp transitions) check this
   and downgrade to a calm, static experience when set.
   ========================================================================== */

const QUERY = '(prefers-reduced-motion: reduce)'

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false
    return window.matchMedia(QUERY).matches
  })

  useEffect(() => {
    if (!window.matchMedia) return
    const mql = window.matchMedia(QUERY)
    const onChange = () => setReduced(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return reduced
}
