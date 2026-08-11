/**
 * Merge this into the repo's tailwind.config.js (theme.extend).
 * Generated from tokens.ts — keep the two in sync if either changes.
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        'soft-grey': '#F5F5F7',
        graphite: '#1C1C1E',
        'near-black': '#111111',
        'brand-midnight': '#0E1B2E',
        accent: {
          100: '#E0E5E9',
          200: '#B6C1CD',
          300: '#8295A9',
          400: '#546F89',
          500: '#2F4F6F',
          600: '#29435C',
          700: '#233649',
        },
      },
      fontFamily: {
        sans: ['Geist', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        wordmark: '0.074em',
        eyebrow: '0.08em',
      },
      borderRadius: {
        sm: '4px',
        md: '6px',
        lg: '8px',
      },
      spacing: {
        18: '4.5rem', // 72px — occasionally needed between the 8px-scale steps
      },
    },
  },
};
