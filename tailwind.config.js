/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      name: ["Silkscreen", "cursive"],
      jp: ["Noto Sans JP", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
