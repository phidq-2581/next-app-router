/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App Router files
    "./pages/**/*.{js,ts,jsx,tsx}", // Optional if you use Pages Router too
    "./components/**/*.{js,ts,jsx,tsx}", // Shared components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

