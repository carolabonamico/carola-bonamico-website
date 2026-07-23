import { useLanguage } from '../../i18n/LanguageContext'
import { en } from '../../i18n/en'
import { it } from '../../i18n/it'

/* ============================================================================
   EN / IT segmented toggle. Reads labels from each dictionary directly so the
   switch is always shown in both languages regardless of the active one.
   ========================================================================== */

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="lang-switch" role="group" aria-label={en.ui.languageToggle + ' / ' + it.ui.languageToggle}>
      <button
        type="button"
        className={`lang-switch__btn ${lang === 'en' ? 'is-active' : ''}`}
        aria-pressed={lang === 'en'}
        onClick={() => setLang('en')}
      >
        {en.langShort}
      </button>
      <span className="lang-switch__sep" aria-hidden="true" />
      <button
        type="button"
        className={`lang-switch__btn ${lang === 'it' ? 'is-active' : ''}`}
        aria-pressed={lang === 'it'}
        onClick={() => setLang('it')}
      >
        {it.langShort}
      </button>
    </div>
  )
}
