/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kameron: ["Kameron", "sans-serif"],
        playfairSc: ["Playfair Display SC", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        slabo: ["Slabo 27px", "sans-serif"],
        perpetua: ["Perpetua Titling MT", "serif"],
        perpetuaThin: ["Perpetua Thin", "serif"],
      },
      colors: {
        primary: {
          navbarBackground: "#FAFAFF",
          blueText: "#000571",
          carouselBtnBg: "#000571D4",
          wideCarouselBtn: "#00057187",
        },
        secondary: {
          detailsBackground: "#E6E7FFCC",
        },
      },
    },
  },
  plugins: [],
};
