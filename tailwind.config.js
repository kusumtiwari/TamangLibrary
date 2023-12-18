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
        'playfair' : ['Playfair Display', 'sans-serif'],
        'slabo' : ['Slabo 27px', 'sans-serif']
      },
     colors:{
      primary:{
        navbarBackground : "#FAFAFF",
        blueText : "#000571",
      },
      secondary:{
        detailsBackground : "#E6E7FFCC"
      }
     }
    },
  },
  plugins: [],
}

