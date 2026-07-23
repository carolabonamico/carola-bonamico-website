import { FiArrowUp, FiMail } from 'react-icons/fi'
import { SectionShell } from '../components/common/SectionShell'
import { Reveal } from '../components/common/Reveal'
import { SocialLinks } from '../components/common/SocialLinks'
import { useTranslation } from '../i18n/LanguageContext'
import { PROFILE, WORDMARK } from '../config/site'
import { scrollToTop } from '../utils/scroll'

/* ============================================================================
   Connect world + footer. Single clear call to action and the social links.
   ========================================================================== */

export function Contact() {
  const t = useTranslation()
  const c = t.contact
  const year = new Date().getFullYear()

  return (
    <SectionShell id="contact" label={c.title} className="contact-section">
      <div className="contact">
        <Reveal>
          <span className="eyebrow">{c.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display contact__title">{c.title}</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="lead contact__lead">{c.lead}</p>
        </Reveal>
        <Reveal delay={0.3}>
          <a className="btn btn--primary contact__email" href={`mailto:${PROFILE.email}`}>
            <FiMail /> {c.emailCta}
          </a>
        </Reveal>
        <Reveal delay={0.38}>
          <SocialLinks
            variant="labelled"
            labels={{ github: c.github, linkedin: c.linkedin, email: c.email }}
          />
        </Reveal>

        <footer className="footer">
          <div className="footer__top">
            <span className="footer__wordmark">{WORDMARK}</span>
            <SocialLinks variant="icon" />
          </div>
          <div className="footer__bottom">
            <span className="footer__copy">
              © {year} {PROFILE.name}
            </span>
            <button className="footer__totop" onClick={scrollToTop}>
              {c.backToTop} <FiArrowUp />
            </button>
          </div>
        </footer>
      </div>
    </SectionShell>
  )
}
