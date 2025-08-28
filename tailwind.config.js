/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'fraunces': ['Lora', 'serif'],
        'inter': ['Open Sans', 'sans-serif'],
      },
      colors: {
        'primary-ink': '#005B64',
        'olive': '#5E7C60',
        'wheat-bg': '#F5F1E9',
        'gold': '#C86B52',
        'sky-callout': '#E6EFF0',
        'slate-secondary': '#3D4042',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
};