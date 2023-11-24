/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        menuDark: '#282828',
        bgDark: '#0f0f0f',
        brandRed: '#f00',
      },
    },
  },
  plugins: [],
};
