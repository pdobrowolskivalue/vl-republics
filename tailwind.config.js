colors = require('tailwindcss/colors')
defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [],
  theme: {
    colors: {
      ...colors,
      'vlr-accent': 'hsl(187.65 100% 60%)',
      'vlr-mild': 'hsl(206.84 69.09% 21.57%)',
      'vlr-backdrop': 'hsl(229.09 70.97% 12.16%)',
      'vlr-dark': 'hsl(243,80%,9.8%)',
    },
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
  },
}
