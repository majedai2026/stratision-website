/**
 * Stratision Design Tokens
 * Single source of truth, generated from Brand Book v1.4 and Design System Spec.
 * Do not hardcode hex values or spacing numbers in components — import from here.
 */

export const colors = {
  // Core Interface (accessible, everyday use)
  white: '#FFFFFF',
  softGrey: '#F5F5F7',
  graphite: '#1C1C1E',
  nearBlack: '#111111',

  // Brand Presentation (hero/emotional moments only — never in UI chrome)
  brandMidnight: '#0E1B2E',

  // Accent scale (Slate Blue, base #2F4F6F)
  accent: {
    100: '#E0E5E9', // subtle fills on dark backgrounds only
    200: '#B6C1CD', // text/icons on dark backgrounds
    300: '#8295A9', // secondary text/icons on dark; large text on white
    400: '#546F89', // body text/links on white; large UI on dark
    500: '#2F4F6F', // base — primary buttons (white text on it), links on white
    600: '#29435C', // hover/pressed states
    700: '#233649', // deep accents, rarely used
  },
} as const;

/**
 * HARD RULE: accent.500 must never be used as text/icon colour directly on
 * graphite, nearBlack, or brandMidnight — it fails WCAG AA contrast (~2.0:1,
 * needs 3:1 minimum). Use accent.200 or accent.300 for text/icons on dark
 * backgrounds instead. See Design System Spec Section 15 for full contrast data.
 */

export const typography = {
  fontFamily: {
    // Geist — locked per Brand Book v1.4. Falls back gracefully if not loaded.
    primary: "'Geist', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  weight: {
    regular: 400, // body copy
    medium: 500, // UI labels, buttons, wordmark
    semibold: 600,
    bold: 700, // headlines only — never for emphasis within body text
  },
  tracking: {
    wordmark: '0.074em', // tightened per Brand Book v1.4
    eyebrow: '0.08em',
  },
  lineHeight: {
    body: 1.5, // within the locked 1.4–1.6 range
    display: 1.1, // within the locked 1.05–1.15 range
  },
} as const;

export const spacing = {
  // 8px base unit scale
  1: '8px',
  2: '16px',
  3: '24px',
  4: '32px',
  6: '48px',
  8: '64px',
  12: '96px',
  16: '128px',
  24: '192px',
} as const;

export const motion = {
  // Timing values for Pass 3 (Higgsfield enhancement phase) — defined now so
  // the vocabulary is fixed, even though Pass 1 ships with no animation wired.
  heroReveal: { duration: 700, stagger: 80, easing: 'ease-out' },
  sectionScrollIn: { duration: 450, easing: 'ease-out' },
  cardHover: { duration: 175, easing: 'ease-in-out' },
  buttonHover: { duration: 120, easing: 'ease-in-out' },
  counter: { duration: 1400, easing: 'ease-out' },
  // Rule: nothing animates on page load except the hero. Everything else is
  // scroll-triggered, once per session. Respect prefers-reduced-motion.
} as const;

export const seam = {
  // The Signature Seam — Stratision's recognisable motif. Always exactly 1px
  // regardless of context. Vary opacity/colour for emphasis, never thickness.
  thickness: '1px',
  offset: '46%', // offset from dead-centre (not 50%) — reads as manufactured, not designed
} as const;

export const radius = {
  // Small and consistent per Design System Spec Section 5 — avoid heavy
  // rounding (16px+), which reads as consumer app rather than executive tool.
  sm: '4px',
  md: '6px',
  lg: '8px',
} as const;

export const trademarks = {
  // HARD CAP: exactly two ™ marks used site-wide. Do not add a third without
  // deliberate discussion — see Brand Book Section 11 (Writing Rules).
  businessIntelligenceAssessment: 'Business Intelligence Assessment™',
  workforceIntelligencePlatform: 'Workforce Intelligence Platform™',
} as const;

export const bannedWords = [
  'revolutionary', 'cutting-edge', 'game-changing', 'disruptive',
  'next-generation', 'seamless', 'unlock', 'supercharge', 'turbocharge',
  'AI-powered',
] as const;
