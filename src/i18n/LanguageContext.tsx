import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { LanguageCode, Translations } from './types'
import { en } from './en'
import { it } from './it'

/* ============================================================================
   Language provider.
   Holds the active language, persists the choice, and exposes the matching
   translation dictionary. Components read copy via `useTranslation()` and switch
   languages via `useLanguage()`.
   ========================================================================== */

const DICTIONARIES: Record<LanguageCode, Translations> = { en, it }
const STORAGE_KEY = 'cb-portfolio-lang'

interface LanguageContextValue {
  lang: LanguageCode
  t: Translations
  setLang: (lang: LanguageCode) => void
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

/** Pick an initial language: stored choice → browser preference → English. */
function resolveInitialLanguage(): LanguageCode {
  if (typeof window === 'undefined') return 'en'

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'it') return stored

  const browser = window.navigator.language?.toLowerCase() ?? ''
  return browser.startsWith('it') ? 'it' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LanguageCode>(resolveInitialLanguage)

  const setLang = useCallback((next: LanguageCode) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* storage may be unavailable (private mode) — choice just won't persist */
    }
  }, [])

  const toggle = useCallback(() => {
    setLangState((prev) => {
      const next: LanguageCode = prev === 'en' ? 'it' : 'en'
      try {
        window.localStorage.setItem(STORAGE_KEY, next)
      } catch {
        /* ignore */
      }
      return next
    })
  }, [])

  // Keep the document <html lang> attribute in sync for a11y / SEO.
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, t: DICTIONARIES[lang], setLang, toggle }),
    [lang, setLang, toggle],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

function useLanguageContext(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}

/** Full language control: current code, setter and toggle. */
export function useLanguage() {
  const { lang, setLang, toggle } = useLanguageContext()
  return { lang, setLang, toggle }
}

/** Just the active translation dictionary — the common case for sections. */
export function useTranslation(): Translations {
  return useLanguageContext().t
}
