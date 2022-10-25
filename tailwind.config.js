colors = require('tailwindcss/colors')
defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [],
  theme: {
    colors: {
      ...colors,
      'vlr-accent': 'hsl(187.65, 100%, 60%)', //#33E5ff
      'vlr-mild': 'hsl(206.84, 69.09%, 21.57%)', //	#113B5D
      'vlr-backdrop': 'hsl(229.09, 70.97%, 12.16%)', //#091135
      'vlr-dark': 'hsl(243, 80%, 9.8%)', //#07052D
      'vlr-bg-light': 'hsl(240, 40%, 98%)', //#F8F8FC
      'vlr-text-light': 'hsl(0, 0%, 100%)', //#FFF
      'vlr-text-dark': 'hsl(242, 75%, 9%)', //#070628
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
  },
}
