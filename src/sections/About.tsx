import { SectionShell } from '../components/common/SectionShell'
import { Reveal } from '../components/common/Reveal'
import { useTranslation } from '../i18n/LanguageContext'

/* ============================================================================
   "The Engineer" world. Ties the context-switching theme together: experience,
   education and the toolbox behind the projects.
   ========================================================================== */

export function About() {
  const t = useTranslation()
  const a = t.about

  return (
    <SectionShell id="about" label={a.title}>
      <div className="about">
        <div className="about__head">
          <Reveal>
            <span className="eyebrow">{a.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="section-title">{a.title}</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lead about__lead">{a.lead}</p>
          </Reveal>
        </div>

        <div className="about__grid">
          <div className="about__col">
            <Reveal>
              <h3 className="about__coltitle">{a.experienceTitle}</h3>
            </Reveal>
            <div className="timeline">
              {a.experience.map((item, i) => (
                <Reveal key={item.role} delay={i * 0.05} className="timeline__item">
                  <span className="timeline__period mono">{item.period}</span>
                  <h4 className="timeline__role">{item.role}</h4>
                  <span className="timeline__org">
                    {item.org} · {item.location}
                  </span>
                  <ul className="timeline__points">
                    {item.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="about__col">
            <Reveal>
              <h3 className="about__coltitle">{a.educationTitle}</h3>
            </Reveal>
            <div className="timeline">
              {a.education.map((item, i) => (
                <Reveal key={item.degree} delay={i * 0.05} className="timeline__item">
                  <span className="timeline__period mono">{item.period}</span>
                  <h4 className="timeline__role">{item.degree}</h4>
                  <span className="timeline__org">{item.school}</span>
                  <p className="timeline__detail">{item.detail}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Toolbox spans the full width, groups laid out in two columns */}
        <div className="about__skills">
          <Reveal>
            <h3 className="about__coltitle">{a.skillsTitle}</h3>
          </Reveal>
          <div className="skills">
            {a.skills.map((group, i) => (
              <Reveal key={group.label} delay={i * 0.05} className="skillgroup">
                <span className="skillgroup__label mono">{group.label}</span>
                <div className="tag-row">
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
