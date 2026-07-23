import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { PROFILE } from '../../config/site'

/* ============================================================================
   Reusable row of social/contact links (hero + contact). `variant` controls
   styling: "icon" for compact icon buttons, "labelled" for icon + text pills.
   ========================================================================== */

interface SocialLinksProps {
  variant?: 'icon' | 'labelled'
  labels?: { github: string; linkedin: string; email: string }
}

export function SocialLinks({ variant = 'icon', labels }: SocialLinksProps) {
  const items = [
    { href: PROFILE.github, icon: <FiGithub />, label: labels?.github ?? 'GitHub', external: true },
    { href: PROFILE.linkedin, icon: <FiLinkedin />, label: labels?.linkedin ?? 'LinkedIn', external: true },
    { href: `mailto:${PROFILE.email}`, icon: <FiMail />, label: labels?.email ?? 'Email', external: false },
  ]

  return (
    <div className={`socials socials--${variant}`}>
      {items.map((item) => (
        <a
          key={item.label}
          className={`social ${variant === 'labelled' ? 'social--labelled' : ''}`}
          href={item.href}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noreferrer' : undefined}
          aria-label={item.label}
        >
          <span className="social__icon">{item.icon}</span>
          {variant === 'labelled' && <span className="social__label">{item.label}</span>}
        </a>
      ))}
    </div>
  )
}
