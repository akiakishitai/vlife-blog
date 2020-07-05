/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
import { colors, opacity } from 'tailwindcss/defaultTheme'
import palette from 'material-colors'

const lime = {
  light: '#ffff6c',
  default: '#ccdb37',
  dark: '#98aa00',
}
const amber = {
  light: '#fff350',
  default: '#ffc107',
  dark: '#c79100',
}
const cyan = {
  light: '#6ff9ff',
  default: '#26c6da',
  dark: '#0095a8',
}

module.exports = {
  theme: {
    extend: {
      colors: {
        lime: lime,
        amber: amber,
        primary: amber,
        secondary: cyan,
        background: palette.grey[200], // gray = grey
        surface: '#efebe9',
        error: '#B00020',
        ...palette,
      },
      opacity: {
        '15': '0.15',
        '38': '0.38',
        '54': '0.54',
        '87': '0.87',
        ...opacity,
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'even', 'odd'],
    backgroundOpacity: ['responsive', 'hover', 'focus', 'even', 'odd'],
    textColor: ['responsive', 'hover', 'focus', 'visited'],
    textDecoration: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
  purge: ['./**/*.html', './**/*.vue'],
}
