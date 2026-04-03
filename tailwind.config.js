/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: 'var(--brand-gold)',
          teal: 'var(--deep-teal)',
          coral: 'var(--coral-cta)',
          blush: 'var(--rose-blush)',
          cream: 'var(--warm-cream)',
          charcoal: 'var(--charcoal)',
          slate: 'var(--slate-gray)',
          silver: 'var(--light-silver)',
          white: 'var(--pure-white)',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      borderRadius: {
        standard: '8px',
        card: '12px',
      },
      boxShadow: {
        subtle: '0 4px 6px rgba(0,0,0,0.07)',
      },
    },
  },
  plugins: [],
}
