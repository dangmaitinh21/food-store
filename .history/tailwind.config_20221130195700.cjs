/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    fontFamily: {
      sans: ['ClashDisplay-Regular', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        tomato: '#E50914',
        marigold: '#FFBE0B',
      },
    },
  },
  plugins: [],
};
