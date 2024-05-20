/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./main.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flexGrow: {
        2: '2'
      }
    },
  },
  plugins: [],
}

