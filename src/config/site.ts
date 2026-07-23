/* ============================================================================
   Site configuration.
   Single source of truth for the section order and all external links.
   The section order here drives the navbar and active-section tracking.
   ========================================================================== */

export type SectionId =
  | 'hero'
  | 'thesis'
  | 'participium'
  | 'autostar'
  | 'about'
  | 'contact'

export interface SectionMeta {
  id: SectionId
}

/** Ordered sections. */
export const SECTIONS: SectionMeta[] = [
  { id: 'hero' },
  { id: 'thesis' },
  { id: 'participium' },
  { id: 'autostar' },
  { id: 'about' },
  { id: 'contact' },
]

/** Lowercase dotted wordmark used as the site logo ("carola.bonamico"). */
export const WORDMARK = 'carola.bonamico'

/** Profile + project links. Update these in one place. */
export const PROFILE = {
  name: 'Carola Bonamico',
  email: 'carola.bonamico@gmail.com',
  github: 'https://github.com/carolabonamico',
  linkedin: 'https://www.linkedin.com/in/carola-bonamico-341805357',
  /** Résumé PDFs live in /public (served from these paths), one per language. */
  resume: {
    en: './CV_Carola_Bonamico_EN_No_Photo.pdf',
    it: './CV_Carola_Bonamico_IT_No_Photo.pdf',
  },
} as const

export const LINKS = {
  thesisRepo: 'https://github.com/carolabonamico/SilentWear',
  thesisPaper: 'https://arxiv.org/abs/2603.02847',
  participiumRepo: 'https://github.com/MauroC0l/Participium',
  participiumVideo: 'https://www.youtube.com/watch?v=ZuxzNpiKi4k',
  participiumVideoId: 'ZuxzNpiKi4k',
  autostarRepo: 'https://github.com/carolabonamico/autostarmotorsport-webapp',
  autostarSite: 'https://autostarmotorsport.vercel.app/',
} as const
