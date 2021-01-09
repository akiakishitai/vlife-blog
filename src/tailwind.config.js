/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

/* eslint-env node, es6 */

/** @type {{opacity: Record<string, string>}} */
const { opacity } = require('tailwindcss/defaultTheme')
/** @type {import('material-colors/dist/colors.json')} */
const palette = require('material-colors/dist/colors.json')

module.exports = {
  theme: {
    extend: {
      colors: {
        ...palette, // override by material color palette
        primary: {
          default: palette.amber[500],
          dark: palette.amber[700],
          light: palette.amber[300],
        },
        secondary: {
          default: palette.cyan[500],
          dark: palette.cyan[700],
          light: palette.cyan[300],
        },
      },
      backgroundColor: {
        background: 'var(--mdc-theme-background)',
        surface: 'var(--mdc-theme-surface)',
        error: 'var(--mdc-theme-error)',
      },
      opacity: {
        ...opacity,
        15: '0.15',
        38: '0.38',
        54: '0.54',
        87: '0.87',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'even', 'odd'],
    backgroundOpacity: ['responsive', 'hover', 'focus', 'even', 'odd'],
    textColor: ['responsive', 'hover', 'focus', 'visited'],
    textDecoration: ['responsive', 'hover', 'focus', 'group-hover'],
    margin: ['responsive', 'first'],
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./**/*.html', './**/*.vue', './**/*.adoc'],
}
