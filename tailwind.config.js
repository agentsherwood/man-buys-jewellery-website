/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1F3557',
        gold: '#D4A574',
        rose: '#F5E6E0',
        offwhite: '#F9F7F5',
        charcoal: '#2C2C2C',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      spacing: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
      },
      borderRadius: {
        card: '8px',
        pill: '999px',
      },
      boxShadow: {
        card: '0 16px 40px rgba(31, 53, 87, 0.08)',
      },
    },
  },
  plugins: [],
}
