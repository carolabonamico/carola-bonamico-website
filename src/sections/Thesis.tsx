import { FiGithub, FiFileText } from 'react-icons/fi'
import { SectionShell } from '../components/common/SectionShell'
import { Reveal } from '../components/common/Reveal'
import { NeckElectrodes } from '../components/visuals/NeckElectrodes'
import { useTranslation } from '../i18n/LanguageContext'
import { LINKS } from '../config/site'

/* ============================================================================
   Flagship world: the master's thesis. Leads with the head/electrode visual,
   then the dataset scale, what was built (protocol, expanded SpeechNet, the two
   downstream tasks) and finally the defended results for each task.
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
        </div>

        <div className="thesis__results">
          <Reveal>
            <h3 className="section-subtitle">{t.thesis.resultsTitle}</h3>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="thesis__results-lead">{t.thesis.resultsLead}</p>
          </Reveal>
          <div className="thesis__results-grid">
            {t.thesis.results.map((r, i) => (
              <Reveal key={r.title} delay={0.1 + i * 0.08} className="result panel">
                <h4 className="result__title">{r.title}</h4>
                <div className="result__metrics">
                  {r.metrics.map((m) => (
                    <div key={m.label} className="result__metric">
                      <div className="result__value">
                        {m.value}
                        {m.unit && <span className="unit">{m.unit}</span>}
                      </div>
                      <div className="result__label">{m.label}</div>
                    </div>
                  ))}
                </div>
                <p className="result__note">{r.note}</p>
              </Reveal>
            ))}
          </div>
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
    </SectionShell>
  )
}
