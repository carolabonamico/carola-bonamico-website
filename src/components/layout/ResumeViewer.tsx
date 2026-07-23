import { useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { FiDownload, FiX } from 'react-icons/fi'
import { PROFILE } from '../../config/site'
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock'
import { useLanguage, useTranslation } from '../../i18n/LanguageContext'
// Ignore missing type declarations for CSS side-effect imports in TypeScript
// @ts-ignore
import './resume-viewer.css'

/* ============================================================================
   Full-screen résumé viewer.
   Embeds the language-matched CV PDF in an overlay so visitors can read it in
   place, with a download action alongside. Closes on Escape or backdrop click.
   ========================================================================== */

export function ResumeViewer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const t = useTranslation()
  const { lang } = useLanguage()
  const reduced = useReducedMotion()
  const href = PROFILE.resume[lang]
  const filename = `CV_Carola_Bonamico_${lang.toUpperCase()}.pdf`

  // Ref-counted scroll lock (shared with the mobile menu) — never gets stuck.
  useBodyScrollLock(open)

  // Close on Escape while the viewer is open.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="resume-viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={t.nav.resume}
        >
          <motion.div
            className="resume-viewer__panel"
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: 16 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="resume-viewer__bar">
              <span className="resume-viewer__title">{t.nav.resume}</span>
              <div className="resume-viewer__actions">
                <a
                  className="btn btn--ghost resume-viewer__download"
                  href={href}
                  download={filename}
                >
                  <FiDownload aria-hidden />
                  <span>{t.ui.download}</span>
                </a>
                <button
                  className="resume-viewer__close"
                  onClick={onClose}
                  aria-label={t.ui.closeViewer}
                >
                  <FiX />
                </button>
              </div>
            </div>
            <iframe className="resume-viewer__frame" src={href} title={t.nav.resume} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
