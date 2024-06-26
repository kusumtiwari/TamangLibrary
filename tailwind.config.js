/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kameron': ['Kameron', 'sans-serif'],
      },
     colors:{
      primary:{
        navbarBackground : "#FAFAFF",
        blueText : "#000571",
      }
     }
    },
  },
  plugins: [],
}

