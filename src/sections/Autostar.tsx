import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { SectionShell } from '../components/common/SectionShell'
import { Reveal } from '../components/common/Reveal'
import { useTranslation } from '../i18n/LanguageContext'
import { LINKS } from '../config/site'

/* ============================================================================
   Motorsport world: the Autostar client site, with a CSS browser mockup as a
   suggestive stand-in for the live product.
   ========================================================================== */

function AutostarMockup() {
  return (
    <a
      className="mockup"
      href={LINKS.autostarSite}
      target="_blank"
      rel="noreferrer"
      aria-label="Open the Autostar Motorsport live site"
    >
      <div className="mockup__bar">
        <span className="mockup__dot" />
        <span className="mockup__dot" />
        <span className="mockup__dot" />
        <span className="mockup__url mono">autostarmotorsport.vercel.app</span>
      </div>
      <div className="mockup__screen">
        {/* Branded fallback shown while the live frame loads (or if framing is blocked) */}
        <div className="mockup__fallback">
          <span className="mockup__wordmark">AUTOSTAR</span>
        </div>
        {/* Live preview of the real site — scaled desktop view, non-interactive */}
        <iframe
          className="mockup__frame"
          src={LINKS.autostarSite}
          title="Autostar Motorsport · live site preview"
          loading="lazy"
          tabIndex={-1}
          scrolling="no"
          aria-hidden="true"
        />
        <span className="mockup__badge mono">
          <FiExternalLink /> Live
        </span>
      </div>
    </a>
  )
}

export function Autostar() {
  const t = useTranslation()
  const a = t.autostar

  return (
    <SectionShell id="autostar" label={`${a.title} · ${a.subtitle}`}>
      <div className="project">
        <div className="grid-2">
          <div className="project__body">
            <Reveal>
              <span className="eyebrow">{a.eyebrow}</span>
            </Reveal>
            <Reveal delay={0.05}>
              <span className="project__role mono">{a.role}</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-title">{a.title}</h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="project__subtitle">{a.subtitle}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="lead">{a.lead}</p>
            </Reveal>
            {a.body.map((para, i) => (
              <Reveal key={i} delay={0.24 + i * 0.05}>
                <p className="project__paragraph">{para}</p>
              </Reveal>
            ))}

            <div className="project__features">
              {a.features.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.05} className="contrib panel">
                  <span className="contrib__num mono">{String(i + 1).padStart(2, '0')}</span>
                  <h4 className="contrib__title">{f.title}</h4>
                  <p className="contrib__text">{f.text}</p>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="tag-row project__tags">
                {a.tags.map((tag) => (
                  <span key={tag} className="tag tag--accent">
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="project__buttons">
                <a className="btn btn--primary" href={LINKS.autostarSite} target="_blank" rel="noreferrer">
                  <FiExternalLink /> {a.visit}
                </a>
                <a className="btn btn--primary" href={LINKS.autostarRepo} target="_blank" rel="noreferrer">
                  <FiGithub /> {a.repo}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="project__media project__media--center">
            <AutostarMockup />
          </Reveal>
        </div>
      </div>
    </SectionShell>
  )
}
