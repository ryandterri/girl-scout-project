/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gs-green': {
          DEFAULT: '#D5F267'
        }
      },
      backgroundImage: {
        'girl-scout': `url('/img/background.png')`
      }
    }
  },
  plugins: [],
}

