import { LanguageProvider, useTranslation } from './i18n/LanguageContext'
import { useActiveSection } from './hooks/useActiveSection'
import { BackgroundTint } from './components/layout/BackgroundTint'
import { ResumeProvider } from './components/layout/ResumeProvider'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './sections/Hero'
import { Thesis } from './sections/Thesis'
import { Participium } from './sections/Participium'
import { Autostar } from './sections/Autostar'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import './App.css'
import './sections/sections.css'

/* ============================================================================
   App composition. A single active-section signal drives the navbar highlight
   and the crossfading background tint.
   ========================================================================== */

function Portfolio() {
  const activeId = useActiveSection()
  const t = useTranslation()

  return (
    <>
      <a className="skip-link" href="#main">
        {t.ui.skipToContent}
      </a>

      <BackgroundTint activeId={activeId} />
      <Navbar activeId={activeId} />

      <main id="main" className="app-shell">
        <Hero />
        <Thesis />
        <Participium />
        <Autostar />
        <About />
        <Contact />
      </main>
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <ResumeProvider>
        <Portfolio />
      </ResumeProvider>
    </LanguageProvider>
  )
}
