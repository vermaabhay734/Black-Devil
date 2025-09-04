/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmic-purple': '#4B0082',
        'cosmic-black': '#121212',
        'cosmic-gold': '#FFD700',
        'cosmic-blue': '#1E3A8A',
        'cosmic-indigo': '#4F46E5',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
