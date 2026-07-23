import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Base design tokens/utilities must load FIRST so component + section styles
// (and their mobile media queries) override them correctly in the cascade.
import './index.css'
import App from './App'

const container = document.getElementById('root')
if (!container) throw new Error('Root element #root not found')

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
