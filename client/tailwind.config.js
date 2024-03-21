/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      dark: "#020A0D",
      "light-dark": "#454248",
      white: "#ffffff",
      primary: "#FFBB4C",
      green: "#71A68B",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      playfail: ["Playfair Display", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
