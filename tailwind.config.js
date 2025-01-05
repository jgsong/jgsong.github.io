/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

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

    //   //These are examples of aliasing  
    //   black: colors.black,
    //   white: colors.white,
    //   gray: colors.slate,
    //   green: colors.emerald,
    //   purple: colors.violet,
    //   yellow: colors.amber,
    //   pink: colors.fuchsia,  

    //   //These are examples of custom colors
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
    
    fontFamily: {
      //Overwrite default font families (sans, serif, display, mono)
      //Default themes included as backups 
      //Tip: Use double-quotes ("") for font names that have spaces
      'sans': ['"PT Sans"', ...defaultTheme.fontFamily.sans], 
      'serif': ['"DM Serif Text"', ...defaultTheme.fontFamily.serif],
      //'mono': ['addMonoFontHere', ...defaultTheme.fontFamily.mono],
      'ptsans': ['"PT Sans"'],
      'dmserif': ['"DM Serif Text"'],
      'dmserifdisplay': ['"DM Serif Display"']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

