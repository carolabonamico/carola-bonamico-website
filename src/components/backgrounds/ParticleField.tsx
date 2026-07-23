import { useEffect, useRef } from 'react'
import { mulberry32, resizeCanvas } from './canvasUtils'

/* ============================================================================
   Constellation / neural-network field. A drift of connected nodes — the
   "thinking machine" motif used on the intro, about and contact worlds.
   Lightweight: animation pauses when the section is inactive, and renders a
   single static frame under reduced-motion.
   ========================================================================== */

interface Node {
  x: number
  y: number
  vx: number
  vy: number
}

interface ParticleFieldProps {
  active: boolean
  reducedMotion: boolean
  /** "r,g,b" for nodes. */
  colorRgb: string
  /** "r,g,b" for link lines. */
  linkRgb: string
  /** Relative density multiplier. */
  density?: number
}

export function ParticleField({
  active,
  reducedMotion,
  colorRgb,
  linkRgb,
  density = 1,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let nodes: Node[] = []
    let raf = 0
    let dims = { width: 0, height: 0 }
    const rand = mulberry32(0x51ee)

    const seed = () => {
      const sized = resizeCanvas(canvas)
      if (!sized) return
      dims = { width: sized.width, height: sized.height }
      const area = dims.width * dims.height
      const count = Math.min(120, Math.floor((area / 16000) * density))
      nodes = Array.from({ length: count }, () => ({
        x: rand() * dims.width,
        y: rand() * dims.height,
        vx: (rand() - 0.5) * 0.28,
        vy: (rand() - 0.5) * 0.28,
      }))
    }

    const draw = () => {
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      const { width, height } = dims
      ctx.clearRect(0, 0, width, height)

      const linkDist = Math.min(160, width * 0.14)

      for (const n of nodes) {
        if (active && !reducedMotion) {
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > width) n.vx *= -1
          if (n.y < 0 || n.y > height) n.vy *= -1
        }
      }

      // Links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * 0.32
            ctx.strokeStyle = `rgba(${linkRgb}, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // Nodes
      for (const n of nodes) {
        ctx.fillStyle = `rgba(${colorRgb}, 0.85)`
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.4, 0, Math.PI * 2)
        ctx.fill()
      }

      if (active && !reducedMotion) raf = requestAnimationFrame(draw)
    }

    seed()
    draw()

    const onResize = () => {
      seed()
      if (!active || reducedMotion) draw()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [active, reducedMotion, colorRgb, linkRgb, density])

  return <canvas ref={canvasRef} className="bg-canvas" aria-hidden="true" />
}
