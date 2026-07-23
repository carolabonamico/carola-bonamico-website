import { FiGithub, FiYoutube } from 'react-icons/fi'
import { SectionShell } from '../components/common/SectionShell'
import { Reveal } from '../components/common/Reveal'
import { YouTubeEmbed } from '../components/common/YouTubeEmbed'
import { useTranslation } from '../i18n/LanguageContext'
import { LINKS } from '../config/site'

/* ============================================================================
   Civic-tech world: Participium. Text + a lite YouTube walkthrough.
   ========================================================================== */

export function Participium() {
  const t = useTranslation()
  const p = t.participium

  return (
    <SectionShell id="participium" label={`${p.title} · ${p.subtitle}`}>
      <div className="project">
        <div className="grid-2">
          <div className="project__body">
            <Reveal>
              <span className="eyebrow">{p.eyebrow}</span>
            </Reveal>
            <Reveal delay={0.05}>
              <span className="project__role mono">{p.role}</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="section-title">{p.title}</h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="project__subtitle">{p.subtitle}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="lead">{p.lead}</p>
            </Reveal>
            {p.body.map((para, i) => (
              <Reveal key={i} delay={0.24 + i * 0.05}>
                <p className="project__paragraph">{para}</p>
              </Reveal>
            ))}

            <div className="project__features">
              {p.features.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.05} className="contrib panel">
                  <span className="contrib__num mono">{String(i + 1).padStart(2, '0')}</span>
                  <h4 className="contrib__title">{f.title}</h4>
                  <p className="contrib__text">{f.text}</p>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="tag-row project__tags">
                {p.tags.map((tag) => (
                  <span key={tag} className="tag tag--accent">
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="project__buttons">
                <a className="btn btn--primary" href={LINKS.participiumVideo} target="_blank" rel="noreferrer">
                  <FiYoutube /> {p.watchVideo}
                </a>
                <a className="btn btn--primary" href={LINKS.participiumRepo} target="_blank" rel="noreferrer">
                  <FiGithub /> {p.repo}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="project__media">
            <YouTubeEmbed videoId={LINKS.participiumVideoId} title={p.videoTitle} />
            <p className="project__caption">{p.videoCaption}</p>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  )
}
