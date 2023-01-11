colors = require('tailwindcss/colors')
defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [],
  theme: {
    colors: {
      ...colors,
      'vlr-accent': 'hsl(188, 100%, 60%)', //#33E5ff
      'vlr-mild': 'hsl(206.84, 69.09%, 21.57%)', //	#113B5D
      'vlr-backdrop': 'hsl(229.09, 70.97%, 12.16%)', //#091135
      'vlr-dark': 'hsl(242, 75%, 9%)', //#07062A
      'vlr-text-shade-of-dark': 'hsl(242, 23%, 28%)',
      'vlr-bg-light': 'hsl(240, 40%, 98%)', //#F8F8FC
      'vlr-shadow': 'hsl(240, 13%, 91%)', //#E5E5EB
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      poppins: ['Poppins', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    screens: {
      xs: '425px',
      ...defaultTheme.screens,
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
  corePlugins: {
    preflight: false,
  },
}
