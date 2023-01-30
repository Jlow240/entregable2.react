/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'redish': '#b9340b',
        'dark-cream': '#cea45c',
        'cream': '#c5be8b',
        'blue': '#498379',
        'dark-brown': '#3f261c',
      }
    },
    fontFamily: {
      "quick": "'Quicksand'"
    },
  },
  plugins: [],
}
