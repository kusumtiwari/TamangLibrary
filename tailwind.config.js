// import { type } from "os"
import type { Config } from "tailwindcss"
// @type {import('tailwindcss').Config}

const config = {

  darkMode: ["class"],
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          titleColor: "#1A4568",
          darkText : '#021944',
          lightText: '#5570FB',
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          navbarBackground: "#FAFAFF",
          blueText: "#000571",
          carouselBtnBg: "#000571D4",
          wideCarouselBtn: "#00057187",
        },
        secondary: {
          detailsBackground : "#E6E7FFCC",
          iconBg : '#1C40A3',
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          labelColor: "#5F677C"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        calibre: ['Calibre', 'sans-serif'],
        plexserif: ['IBM Plex Serif', 'serif'],
        plexserifItalic: ['IBM Plex Serif', 'serif', 'italic'],
        sourceSerifPro: ['Source Serif Pro', 'sans-serif'],
        kameron: ["Kameron", "sans-serif"],
        playfairSc: ["Playfair Display SC", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        slabo: ["Slabo 27px", "sans-serif"],
        perpetua: ["Perpetua Titling MT", "serif"],
        perpetuaThin: ["Perpetua Thin", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config