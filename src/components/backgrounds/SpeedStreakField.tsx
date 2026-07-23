import { useEffect, useRef } from 'react'
import { mulberry32, resizeCanvas } from './canvasUtils'

/* ============================================================================
   Speed streaks for the Autostar (motorsport) world. Light trails rip across
   the screen — motion blur as a feeling, not a literal car.
   ========================================================================== */

const COUNT = 46

interface Streak {
  x: number
  y: number
  len: number
  speed: number
  alpha: number
  hot: boolean
}

interface SpeedStreakFieldProps {
  active: boolean
  reducedMotion: boolean
  colorRgb: string
  color2Rgb: string
}

export function SpeedStreakField({
  active,
  reducedMotion,
  colorRgb,
  color2Rgb,
}: SpeedStreakFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rand = mulberry32(0x9a55)
    let dims = { width: 0, height: 0 }
    let raf = 0
    let streaks: Streak[] = []

    const make = (offRight: boolean): Streak => ({
      x: offRight ? dims.width + rand() * dims.width : rand() * dims.width,
      y: rand() * dims.height,
      len: 80 + rand() * 320,
      speed: 6 + rand() * 22,
      alpha: 0.08 + rand() * 0.35,
      hot: rand() > 0.82,
    })

    const size = () => {
      const sized = resizeCanvas(canvas)
      if (sized) dims = { width: sized.width, height: sized.height }
    }

    const seed = () => {
      streaks = Array.from({ length: COUNT }, () => make(false))
    }

    const draw = () => {
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      const { width, height } = dims
      ctx.clearRect(0, 0, width, height)

      for (const s of streaks) {
        const rgb = s.hot ? color2Rgb : colorRgb
        const grad = ctx.createLinearGradient(s.x, s.y, s.x + s.len, s.y)
        grad.addColorStop(0, `rgba(${rgb}, 0)`)
        grad.addColorStop(1, `rgba(${rgb}, ${s.alpha})`)
        ctx.strokeStyle = grad
        ctx.lineWidth = s.hot ? 2 : 1
        ctx.beginPath()
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(s.x + s.len, s.y)
        ctx.stroke()

        if (active && !reducedMotion) {
          s.x -= s.speed
          if (s.x + s.len < 0) Object.assign(s, make(true))
        }
      }

      if (active && !reducedMotion) raf = requestAnimationFrame(draw)
    }

    size()
    seed()
    draw()

    const onResize = () => {
      size()
      seed()
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
