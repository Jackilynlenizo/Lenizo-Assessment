/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        outfit: "'Outfit', sans-serif",
        montserrat: "'Montserrat', sans-serif"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
