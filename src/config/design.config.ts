/**
 * Luxury real estate design tokens — aligned for V0 / Tailwind / CSS variables.
 */
export const luxuryDesign = {
  colors: {
    navy: '#0f1a2e',
    navyLight: '#1a2d4a',
    charcoal: '#2c2c2c',
    champagne: '#c9a962',
    champagneLight: '#e8d5a3',
    cream: '#faf9f7',
    warmWhite: '#ffffff',
    muted: '#6b7280',
    border: '#e8e4dc',
  },
  fonts: {
    display: 'var(--font-cormorant)',
    body: 'var(--font-inter)',
  },
  spacing: {
    sectionY: 'py-20 md:py-28',
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  },
} as const;
