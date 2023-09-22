/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.{html, js}'],
  theme: {
    extend: {
      colors: {
        'soft-blue': 'hsl(215, 51%, 70%)',
        cyan: 'hsl(178, 100%, 50%)',
        'very-dark-blue': 'hsl(217, 54%, 11%)',
        'very-dark-blue-card': 'hsl(216, 50%, 16%)',
        'very-dark-blue-line': 'hsl(215, 32%, 27%)',
        white: 'hsl(0, 0%, 100%)',
        'transparent-cyan': 'var(--transparent-cyan)' //from css variable (to be used in html)
      },
      fontFamily: {
        outfit: ['Outfit'],
      },
    },
  },
  plugins: [],
}
