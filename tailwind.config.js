/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container:{
        center: true,
        screens: {
          lg: '1140px',
          xl: '1140px',
          '2xl': '1140px'
        }
      },
      fontFamily: {
        gemunu: ['Gemunu Libre','sans-serif'],
        open: ['Open Sans','sans-serif'],
      },
      colors: {
         'flickzone-yellow': '#FBD85D',
         'flickzone-grey': '#EDEDED',
         'flickzone-blue': '#B1DDF1',
         'flickzone-gold': '#735F32',
      },
      spacing: {
        128: '32rem',
        110: '25rem'
      }
    },
  },
  plugins: [],
}

