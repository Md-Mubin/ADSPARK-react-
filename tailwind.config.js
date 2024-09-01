/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        monstereat: ["Montserrat", "sans-serif"]
      },
      container: {
        center: true,
      }
    },
  },
  plugins: [],
}