/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,}"],
  theme: {
    extend: {
      colors: {
        " lightgreen": "hsl(148, 38%, 91%)",
        " Green": " hsl(169, 82%, 27%) ",
        " red": " hsl(0, 66%, 56%) ",
        " white": " hsl(0, 0%, 100%)",
        " mediumgrey": " hsl(186, 15%, 59%)",
        " darkgrey": " hsl(187, 24%, 22%)",
      },
      fontFamily: {
        " Karla": ["Karla", "sans - serif"],
      },
    },
  },
  plugins: [],
};
