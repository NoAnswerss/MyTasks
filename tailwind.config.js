/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          brightBlue: 'hsl(220, 98%, 61%)',
          checkBackground: 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
        },
        neutral: {
          lightGray: 'hsl(0, 0%, 98%)',
          veryLightGrayishBlue: 'hsl(236, 33%, 92%)',
          lightGrayishBlue: 'hsl(233, 11%, 84%)',
          darkGrayishBlue: 'hsl(236, 9%, 61%)',
          veryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
        },
        darkTheme: {
          veryDarkBlue: 'hsl(235, 21%, 11%)',
          veryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
          lightGrayishBlue: 'hsl(234, 39%, 85%)',
          lightGrayishBlueHover: 'hsl(236, 33%, 92%)',
          darkGrayishBlue: 'hsl(234, 11%, 52%)',
          veryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
          veryDarkGrayishBlueHover: 'hsl(237, 14%, 26%)',
        },
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
      },
      fontSize: {
        '18': '18px',
      },
      fontWeight: {
        '400': 400,
        '700': 700,
      },
    },
  },
  variants: {},
  plugins: [],
};