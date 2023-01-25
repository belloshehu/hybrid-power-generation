/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#495E57',
        secondary: '#F4CE14'
      },
      fontSize:{
        title: '2.5rem',
        subtitle: '1.5rem'
      },
      fontFamily: {
        title: 'cursive',
        body: 'Trebuchet MS',
        subtitle: 'Trebuchet MS' 
      }
    },
  },
  plugins: [],
}
