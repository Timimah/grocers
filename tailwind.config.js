/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        pickle: "url('images/pickle.jpg')"
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
