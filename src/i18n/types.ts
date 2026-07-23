/* ============================================================================
   i18n contract.
   `en.ts` and `it.ts` BOTH implement the `Translations` interface below, so the
   two language files are guaranteed to stay structurally in sync — a missing or
   renamed key is a compile-time error. To add a string: add it here once, then
   fill it in both language files.
   ========================================================================== */

export type LanguageCode = 'en' | 'it'

/** A short title + body pair (feature cards, contribution items). */
export interface FeatureItem {
  title: string
  text: string
}

/** A headline number with an optional unit and a caption. */
export interface Stat {
  value: string
  unit?: string
  label: string
}

/** A work-experience entry on the About timeline. */
export interface TimelineItem {
  period: string
  role: string
  org: string
  location: string
  points: string[]
}

/** An education entry on the About timeline. */
export interface EducationItem {
  period: string
  degree: string
  school: string
  detail: string
}

/** A labelled group of skills/technologies. */
export interface SkillGroup {
  label: string
  items: string[]
}

export interface Translations {
  /** Native language name shown in the switcher (e.g. "EN" / "IT"). */
  langShort: string
  langName: string

  nav: {
    home: string
    thesis: string
    participium: string
    autostar: string
    about: string
    contact: string
    resume: string
  }

  hero: {
    available: string
    greeting: string
    name: string
    /** Rotating role words shown under the name. */
    roles: string[]
    tagline: string
    location: string
    ctaPrimary: string
    ctaSecondary: string
    scrollHint: string
  }

  thesis: {
    context: string
    eyebrow: string
    institution: string
    title: string
    subtitle: string
    lead: string
    body: string[]
    contributionTitle: string
    contributions: FeatureItem[]
    stats: Stat[]
    tags: string[]
    repo: string
    paper: string
    /** Labels rendered inside the animated neck / signal visual. */
    anim: {
      title: string
      channels: string
      vocalized: string
      silent: string
      decoding: string
      output: string
      caption: string
    }
  }

  participium: {
    context: string
    eyebrow: string
    role: string
    title: string
    subtitle: string
    lead: string
    body: string[]
    features: FeatureItem[]
    tags: string[]
    videoTitle: string
    videoCaption: string
    watchVideo: string
    repo: string
  }

  autostar: {
    context: string
    eyebrow: string
    role: string
    title: string
    subtitle: string
    lead: string
    body: string[]
    features: FeatureItem[]
    tags: string[]
    repo: string
    visit: string
  }

  about: {
    context: string
    eyebrow: string
    title: string
    lead: string
    experienceTitle: string
    experience: TimelineItem[]
    educationTitle: string
    education: EducationItem[]
    skillsTitle: string
    skills: SkillGroup[]
  }

  contact: {
    context: string
    eyebrow: string
    title: string
    lead: string
    email: string
    emailCta: string
    linkedin: string
    github: string
    footerNote: string
    backToTop: string
  }

  ui: {
    /** aria-label for the language toggle. */
    languageToggle: string
    openMenu: string
    closeMenu: string
    /** Label preceding the "01 / 06" section counter. */
    contextLabel: string
    /** Keyboard skip-link target text. */
    skipToContent: string
    /** Résumé viewer: download button label + close-button aria-label. */
    download: string
    closeViewer: string
  }
}
