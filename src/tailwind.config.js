/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
import { opacity } from 'tailwindcss/defaultTheme'
import palette from 'material-colors'

function customColorProperty(type, colorName) {
  const propertyMap = new Map([
    ['background', `rgba(var(--color-${colorName}-rgb), var(--bg-opacity, 1))`],
    ['text', `rgba(var(--color-${colorName}-rgb), var(--text-opacity, 1))`],
    ['border', `rgba(var(--color-${colorName}-rgb), var(--border-opacity, 1))`],
    ['divide', `rgba(var(--color-${colorName}-rgb), var(--divide-opacity, 1))`],
  ])

  return propertyMap.get(type)
}

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
        background: customColorProperty('background', 'background'),
        surface: customColorProperty('background', 'surface'),
        error: customColorProperty('background', 'error'),
      },
      textColor: {
        'on-surface': customColorProperty('text', 'on-surface'),
        'on-error': customColorProperty('text', 'on-error'),
      },
      opacity: {
        ...opacity,
        '15': '0.15',
        '38': '0.38',
        '54': '0.54',
        '87': '0.87',
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
