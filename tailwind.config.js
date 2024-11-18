export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode support
  theme: {
    extend: {
      colors: {
        // Light mode colors
        'electric-yellow': '#FFCB05',
        'midnight-blue': '#2A4D69',
        'soft-white': '#F8F9FA',
        'grass-green': '#3DA35D',
        'slate-gray': '#5D737E',

        // Dark mode colors
        'dark-charcoal': '#121212',
        'golden-yellow': '#D4A017',
        'pure-white': '#FFFFFF',
        'forest-green': '#1F5B4A',
        'steel-gray': '#3A3A3A',
      },
    },
  },
  plugins: [],
};