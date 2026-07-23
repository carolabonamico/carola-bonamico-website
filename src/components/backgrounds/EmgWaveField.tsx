import { useEffect, useRef } from 'react'
import { mulberry32, resizeCanvas } from './canvasUtils'

/* ============================================================================
   Multi-channel EMG signal field for the SilentWear (thesis) world.
   Synthetic surface-EMG traces scroll across the screen; a travelling burst
   envelope per channel mimics the muscle activity of a spoken word.
   ========================================================================== */

const CHANNELS = 8
const NOISE_LEN = 768
const STEP = 3 // px between sampled columns

interface EmgWaveFieldProps {
  active: boolean
  reducedMotion: boolean
  colorRgb: string
  color2Rgb: string
}

export function EmgWaveField({ active, reducedMotion, colorRgb, color2Rgb }: EmgWaveFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Static per-channel noise tables (filled once, scrolled at render time).
    const rand = mulberry32(0x7e3a)
    const noise: number[][] = Array.from({ length: CHANNELS }, () =>
      Array.from({ length: NOISE_LEN }, () => (rand() * 2 - 1)),
    )

    let dims = { width: 0, height: 0 }
    let raf = 0
    let frame = 0

    const size = () => {
      const sized = resizeCanvas(canvas)
      if (sized) dims = { width: sized.width, height: sized.height }
    }

    const draw = () => {
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      const { width, height } = dims
      ctx.clearRect(0, 0, width, height)

      const cols = Math.ceil(width / STEP)
      const t = frame / 60
      const spacing = height / (CHANNELS + 1)
      const amp = spacing * 0.46

      for (let c = 0; c < CHANNELS; c++) {
        const baseY = spacing * (c + 1)
        const scroll = Math.floor(t * 24 + c * 40)
        // Travelling activity burst — a "word" sweeping across the channel.
        const burstPos = ((t * 0.025 + c * 0.12) % 1.3) - 0.15

        ctx.beginPath()
        for (let i = 0; i <= cols; i++) {
          const idx = (i + scroll) % NOISE_LEN
          const n = noise[c][(idx + NOISE_LEN) % NOISE_LEN]
          const d = i / cols - burstPos
          const burst = Math.exp(-(d * d) / (2 * 0.0016))
          const env = 0.1 + burst * 0.95
          const wobble = Math.sin(i * 0.07 + t * 0.5 + c) * 0.18
          const y = baseY + (n * env + wobble * env) * amp
          const x = i * STEP
          if (i === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }

        const isHot = Math.abs(burstPos - 0.5) < 0.4
        ctx.strokeStyle = isHot ? `rgba(${color2Rgb}, 0.32)` : `rgba(${colorRgb}, 0.2)`
        ctx.lineWidth = 1.2
        ctx.stroke()
      }

      if (active && !reducedMotion) {
        frame += 1
        raf = requestAnimationFrame(draw)
      }
    }

    size()
    draw()

    const onResize = () => {
      size()
      if (!active || reducedMotion) draw()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [active, reducedMotion, colorRgb, color2Rgb])

  return <canvas ref={canvasRef} className="bg-canvas" aria-hidden="true" />
}
