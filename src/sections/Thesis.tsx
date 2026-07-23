import { FiGithub, FiFileText } from 'react-icons/fi'
import { SectionShell } from '../components/common/SectionShell'
import { Reveal } from '../components/common/Reveal'
import { NeckElectrodes } from '../components/visuals/NeckElectrodes'
import { useTranslation } from '../i18n/LanguageContext'
import { LINKS } from '../config/site'

/* ============================================================================
   Flagship world: the master's thesis. Leads with the neck-electrode visual and
   foregrounds the deep-learning contribution (new protocol, expanded SpeechNet,
   CTC decoding, foundation-model integration) over the hardware.
   ========================================================================== */

export function Thesis() {
  const t = useTranslation()

  return (
    <SectionShell id="thesis" label={`${t.thesis.title} · ${t.thesis.subtitle}`}>
      <div className="thesis">
        <div className="grid-2 thesis__top">
          <div className="thesis__intro">
            <Reveal>
              <span className="eyebrow">{t.thesis.eyebrow}</span>
            </Reveal>
            <Reveal delay={0.05}>
              <span className="thesis__inst mono">{t.thesis.institution}</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display thesis__title">{t.thesis.title}</h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="thesis__subtitle">{t.thesis.subtitle}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="lead thesis__lead">{t.thesis.lead}</p>
            </Reveal>
            {t.thesis.body.map((para, i) => (
              <Reveal key={i} delay={0.24 + i * 0.05}>
                <p className="thesis__body">{para}</p>
              </Reveal>
            ))}
            <Reveal delay={0.34}>
              <div className="thesis__buttons">
                <a className="btn btn--primary" href={LINKS.thesisRepo} target="_blank" rel="noreferrer">
                  <FiGithub /> {t.thesis.repo}
                </a>
                <a className="btn btn--primary" href={LINKS.thesisPaper} target="_blank" rel="noreferrer">
                  <FiFileText /> {t.thesis.paper}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="thesis__visual">
            <NeckElectrodes />
          </Reveal>
        </div>

        <div className="thesis__stats">
          {t.thesis.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06} className="stat">
              <div className="stat__value">
                {stat.value}
                {stat.unit && <span className="unit">{stat.unit}</span>}
              </div>
              <div className="stat__label">{stat.label}</div>
            </Reveal>
          ))}
        </div>

        <div className="thesis__contrib">
          <Reveal>
            <h3 className="section-subtitle">{t.thesis.contributionTitle}</h3>
          </Reveal>
          <div className="thesis__contrib-grid">
            {t.thesis.contributions.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06} className="contrib panel">
                <span className="contrib__num mono">{String(i + 1).padStart(2, '0')}</span>
                <h4 className="contrib__title">{c.title}</h4>
                <p className="contrib__text">{c.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="tag-row thesis__tags">
              {t.thesis.tags.map((tag) => (
                <span key={tag} className="tag tag--accent">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  )
}
