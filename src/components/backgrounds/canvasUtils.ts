/* ============================================================================
   Small canvas helpers shared by the animated backdrops.
   Handles DPR-aware sizing (capped for performance) and a resize observer.
   ========================================================================== */

export interface CanvasContext {
  ctx: CanvasRenderingContext2D
  /** CSS pixel width / height (not device pixels). */
  width: number
  height: number
}

/** Cap device-pixel-ratio so retina + large screens don't melt the GPU. */
const MAX_DPR = 1.75

/**
 * Resize a canvas to its parent's box in device pixels and scale the context so
 * all drawing happens in CSS pixels. Returns the CSS dimensions.
 */
export function resizeCanvas(canvas: HTMLCanvasElement): CanvasContext | null {
  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  const parent = canvas.parentElement
  const rect = parent?.getBoundingClientRect()
  const width = Math.max(1, Math.floor(rect?.width ?? window.innerWidth))
  const height = Math.max(1, Math.floor(rect?.height ?? window.innerHeight))
  const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR)

  canvas.width = Math.floor(width * dpr)
  canvas.height = Math.floor(height * dpr)
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

  return { ctx, width, height }
}

/** Deterministic pseudo-random in [0,1) — avoids Math.random for stable seeds. */
export function mulberry32(seed: number): () => number {
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
