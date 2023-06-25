/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-purple": "#7D5FFF",
      "primary-blue": "#00FFFF",
      "second-purple": "#AA52FF",
      "second-blue": "#088BFF",
      "light-gray": "#808080",
      "dark-gray": "#4D4D4D",
      white: "fff",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
