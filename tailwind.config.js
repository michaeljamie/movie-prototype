/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "light_black": "#1c1c1e",
      "white": "#f3f3f3",
      "neutral": "#2a2a2b",
      "black": "#19191b",
      "blue": "#0390F8",
      "para_text": "#565657",
      "gray": "#383839",
      "charcoal": "#303135",
      "light_gray": "#7d7d7e",
      "transparent": 'transparent',
      "yellow": "#facc15",
      "red": "#DC143C",
    },
    extend: {},
  },
  plugins: [],
}
