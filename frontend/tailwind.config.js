/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#eaf3f5',
          400: '#9ecad2',
          500: '#7bb7c1',
          600: '#5b9aa5',
          700: '#437983',
        },
        secondary: {
          100: '#fce8de',
          400: '#ec8a63',
          500: '#e66c3b',
          600: '#c8552a',
        },
        neutral: {
          100: '#f5f5f4',
          200: '#dadad8',
          300: '#c4c4c2',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
