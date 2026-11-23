/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {
    colors: { noir: '#11110f', cream: '#f4f0e8', gold: '#c6a56a', muted: '#858078' },
    fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Playfair Display', 'serif'] }
  }},
  plugins: []
}
