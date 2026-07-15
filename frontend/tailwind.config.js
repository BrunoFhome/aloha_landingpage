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
          400: '#fcd34d',
          500: '#fbbf24',
          600: '#f59e0b',
        },
        secondary: {
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
