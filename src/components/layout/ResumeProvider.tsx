import { createContext, useCallback, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import { ResumeViewer } from './ResumeViewer'

/* ============================================================================
   Résumé provider.
   Mounts the viewer once and exposes `openResume()` so any component (navbar,
   hero, …) can open the in-page CV window. Downloading is available from the
   button inside the viewer.
   ========================================================================== */

const ResumeContext = createContext<() => void>(() => {})

/** Open the CV viewer. */
export function useResume() {
  return useContext(ResumeContext)
}

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const openResume = useCallback(() => setOpen(true), [])

  return (
    <ResumeContext.Provider value={openResume}>
      {children}
      <ResumeViewer open={open} onClose={() => setOpen(false)} />
    </ResumeContext.Provider>
  )
}
