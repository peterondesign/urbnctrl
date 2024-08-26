/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        // playfail: ["Playfair Display", "serif"],
      },
    extend: {
      colors: {
        custom1: "#E1DFDF",
        custom2: "#F5ECDF"

      },
    },
  },
  plugins: [],
}

