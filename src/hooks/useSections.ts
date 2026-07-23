import { useMemo } from 'react'
import { SECTIONS } from '../config/site'
import type { SectionId } from '../config/site'
import { useTranslation } from '../i18n/LanguageContext'

/* ============================================================================
   Resolves the static section list into display-ready, translated metadata
   (the short nav label). Re-runs only when the language changes.
   ========================================================================== */

export interface ResolvedSection {
  id: SectionId
  navLabel: string
}

export function useSections(): ResolvedSection[] {
  const t = useTranslation()

  return useMemo(
    () =>
      SECTIONS.map(({ id }) => ({
        id,
        navLabel: id === 'hero' ? t.nav.home : t.nav[id],
      })),
    [t],
  )
}
