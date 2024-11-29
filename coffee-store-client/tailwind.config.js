/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'default': ["Rancho", 'cursive' ],
      },
      backgroundImage: {
        'hero-product': "url('./src/assets/more/1.png')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}