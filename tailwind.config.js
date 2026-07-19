/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Projenin yapısına göre burası değişiklik gösterebilir
  ],
  theme: {
    extend: {
      colors: {
        'soft-peach': '#f5c99065',
        'kahverengi':'#A65F1B',
      },
    },
  },
  plugins: [],
}