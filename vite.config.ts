import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Static SPA — no backend. `base` is './' so the built bundle can be hosted
// from any sub-path (GitHub Pages, Netlify, a CDN folder) without rewrites.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
