/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,ts}"],
  theme: {
    fontFamily:{
      'sans': ['Roboto', 'sans-serif']
    
    },
    extend: {
      backgroundImage:{
        "home": "url('/assets/bg.png')",
      }
    },
  },
  plugins: [],
}

