import { useEffect } from 'react'

/* ============================================================================
   Ref-counted body scroll lock.
   Several components can request a lock at once (the mobile menu and the résumé
   viewer). We save the original `overflow` only when the first lock is taken and
   restore it only when the last lock is released, so overlapping open/close
   sequences can never leave the page permanently frozen.
   ========================================================================== */

let lockCount = 0
let savedOverflow = ''

/** Lock body scroll while `locked` is true. Safe to nest across components. */
export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return

    if (lockCount === 0) {
      savedOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
    }
    lockCount += 1

    return () => {
      lockCount -= 1
      if (lockCount === 0) {
        document.body.style.overflow = savedOverflow
      }
    }
  }, [locked])
}
