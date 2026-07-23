import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

/* ============================================================================
   Scroll-reveal wrapper. Fades + lifts its children into view once, and becomes
   a no-op transform under reduced-motion (content still appears, just static).
   ========================================================================== */

interface RevealProps {
  children: ReactNode
  className?: string
  /** Stagger delay in seconds. */
  delay?: number
  /** Travel distance in px. */
  y?: number
}

export function Reveal({ children, className, delay = 0, y = 26 }: RevealProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
