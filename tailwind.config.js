/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    // colors: {
    //   //Overwrite theme colors
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   black: colors.black,
    //   white: colors.white,
    //   gray: colors.slate,
    //   green: colors.emerald,
    //   purple: colors.violet,
    //   yellow: colors.amber,
    //   pink: colors.fuchsia,  
    //   'blue': '#1fb6ff',
    //   'purple': '#7e5bef',
    //   'pink': '#ff49db',
    //   'orange': '#ff7849',
    //   'green': '#13ce66',
    //   'yellow': '#ffc82c',
    //   'gray-dark': '#273444',
    //   'gray': '#8492a6',
    //   'gray-light': '#d3dce6',
    // },
    
    // fontFamily:{
    //   //Overwrite default font families (sans, serif, display, monospace) 
    //   //Tip: Use double-quotes ("") for font names that have spaces
    //   //TODO: Figure out how to import google fonts
    //   'sans': ['Inter, sans-serif'], 
    //   'serif': []
    //   'display': ['"Work Sans", Helvetica, Arial, sans-serif']
    // },
    extend: {},
  },
  plugins: [],
}

