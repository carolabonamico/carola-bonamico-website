import { FiArrowDown, FiMapPin } from 'react-icons/fi'
import { SectionShell } from '../components/common/SectionShell'
import { Reveal } from '../components/common/Reveal'
import { SocialLinks } from '../components/common/SocialLinks'
import { useTranslation } from '../i18n/LanguageContext'
import { scrollToSection } from '../utils/scroll'

/* ============================================================================
   Intro. Name, roles, the one-line pitch, and the entry points.
   ========================================================================== */

export function Hero() {
  const t = useTranslation()

  return (
    <SectionShell id="hero" label={t.hero.name} className="hero-section">
      <div className="hero">
        <Reveal>
          <p className="hero__greeting">{t.hero.greeting}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="display hero__name">{t.hero.name}</h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="hero__roles">{t.hero.roles.join(' · ')}</p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="lead hero__tagline">{t.hero.tagline}</p>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="hero__actions">
            <button className="btn btn--primary" onClick={() => scrollToSection('thesis')}>
              {t.hero.ctaPrimary}
              <FiArrowDown />
            </button>
            <button className="btn btn--primary" onClick={() => scrollToSection('contact')}>
              {t.hero.ctaSecondary}
            </button>
            <SocialLinks variant="icon" />
          </div>
        </Reveal>

        <Reveal delay={0.34}>
          <div className="hero__footer">
            <span className="hero__loc mono">
              <FiMapPin /> {t.hero.location}
            </span>
            <FiArrowDown className="hero__scroll-arrow" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </SectionShell>
  )
}
