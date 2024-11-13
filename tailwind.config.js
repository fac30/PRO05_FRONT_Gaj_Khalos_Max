/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric-yellow': '#FFCB05',
        'midnight-blue': '#2A4D69',
        'soft-white': '#F8F9FA',
        'grass-green': '#3DA35D',
        'slate-gray': '#5D737E',
      },
    },
  },
  plugins: [],
}

