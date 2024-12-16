/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        primary: {
          DEFAULT: '#0075C2',
        },
        danger: {
          DEFAULT: '#DD3C57',
        },
        success: {
          DEFAULT: '#00B22D',
        },
        defaultText: '#001F33',
        defaultBackground: '#F2F8FC',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
