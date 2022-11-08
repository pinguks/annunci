/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "tomasi-red": "#d2232a",
        "light-gray": "#bcbcbc",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
