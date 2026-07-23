import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import type { SectionId } from '../../config/site'
import { PROFILE, WORDMARK } from '../../config/site'
import { useSections } from '../../hooks/useSections'
import { useTranslation } from '../../i18n/LanguageContext'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ResumeViewer } from './ResumeViewer'
// Ignore missing type declarations for CSS modules in TypeScript
// @ts-ignore
import './navbar.css'

/* ============================================================================
   Fixed top navigation: wordmark logo, section links grouped in a pill,
   language switch and résumé. Collapses into an overlay menu on mobile.
   ========================================================================== */

function scrollToSection(id: SectionId) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Navbar({ activeId }: { activeId: SectionId }) {
  const sections = useSections()
  const t = useTranslation()
  const reduced = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [resumeOpen, setResumeOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const go = (id: SectionId) => {
    setMenuOpen(false)
    scrollToSection(id)
  }

  return (
    <>
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <button className="nav__brand" onClick={() => go('hero')} aria-label={PROFILE.name}>
          <span className="nav__wordmark">{WORDMARK}</span>
        </button>

        <nav className="nav__links" aria-label="Sections">
          {sections.map((s) => (
            <button
              key={s.id}
              className={`nav__link ${activeId === s.id ? 'is-active' : ''}`}
              onClick={() => go(s.id)}
              aria-current={activeId === s.id ? 'true' : undefined}
            >
              {s.navLabel}
            </button>
          ))}
        </nav>

        <div className="nav__actions">
          <LanguageSwitcher />
          <button className="nav__resume btn btn--ghost" onClick={() => setResumeOpen(true)}>
            {t.nav.resume}
          </button>
          <button
            className="nav__burger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? t.ui.closeMenu : t.ui.openMenu}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav__overlay"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            {sections.map((s, i) => (
              <button key={s.id} className="nav__overlay-link" onClick={() => go(s.id)}>
                <span className="nav__overlay-index mono">{String(i + 1).padStart(2, '0')}</span>
                {s.navLabel}
              </button>
            ))}
            <button
              className="nav__overlay-link"
              onClick={() => {
                setMenuOpen(false)
                setResumeOpen(true)
              }}
            >
              <span className="nav__overlay-index mono">↗</span>
              {t.nav.resume}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>

    <ResumeViewer open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  )
}
