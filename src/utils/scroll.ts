import type { SectionId } from '../config/site'

/** Smooth-scroll a section into view by id (respects the browser's settings). */
export function scrollToSection(id: SectionId) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/** Scroll back to the very top of the page. */
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
