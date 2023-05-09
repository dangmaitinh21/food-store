/** @type {import('tailwindcss').Config} */

const { defaults } = require('autoprefixer');

module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['ClashDisplay-Regular', ...defaultTheme.fontFamily.sans],
      // },
      colors: {
        tomato: '#E50914',
        marigold: '#FFBE0B',
      },
    },
  },
};
