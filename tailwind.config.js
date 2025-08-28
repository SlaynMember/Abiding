/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'fraunces': ['Fraunces', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-ink': '#0E1726',
        'olive': '#3E4E3B',
        'wheat-bg': '#E9E2D0',
        'gold': '#C89B3C',
        'sky-callout': '#DDE7F6',
        'slate-secondary': '#5B6B7A',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
};