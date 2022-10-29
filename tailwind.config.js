const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.neutral,
        light: {
          DEFAULT: '#FFFFFF',
          50: '#FFFFFF',
          100: '#FAFAFA',
          200: '#F0F0F0',
          300: '#E6E6E6',
          400: '#DBDBDB',
          500: '#D1D1D1',
          600: '#C7C7C7',
          700: '#BDBDBD',
          800: '#B3B3B3',
          900: '#A8A8A8',
        },
        dark: {
          DEFAULT: '#000000',
          50: '#575757',
          100: '#525252',
          200: '#474747',
          300: '#3D3D3D',
          400: '#333333',
          500: '#292929',
          600: '#1F1F1F',
          700: '#141414',
          800: '#0A0A0A',
          900: '#000000',
        },
      },
    },
    container: {
      padding: '1rem',
    },
  },
};
