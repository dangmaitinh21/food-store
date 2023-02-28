/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ClashDisplayRegular', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        tomato: '#E50914',
        marigold: '#FFBE0B',
      },
    },
  },
  plugins: [],
};
