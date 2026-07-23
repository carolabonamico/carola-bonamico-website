import type { ReactNode } from 'react'
import type { SectionId } from '../../config/site'

/* ============================================================================
   Section wrapper. Sets the id used for in-view tracking and anchor
   navigation, and exposes a labelled landmark for assistive tech.
   ========================================================================== */

interface SectionShellProps {
  id: SectionId
  label: string
  children: ReactNode
  className?: string
}

export function SectionShell({ id, label, children, className }: SectionShellProps) {
  return (
    <section id={id} aria-label={label} className={`section ${className ?? ''}`}>
      <div className="section__inner">{children}</div>
    </section>
  )
}
