const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js', './styles.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.rose,
        secondary: colors.amber,
        neutral: colors.warmGray,

        green: colors.lime,
      },
    },
  },
  variants: {
    extend: {
      inset: ['group-hover'],
      margin: ['first', 'hover'],
      padding: ['hover'],
      backgroundImage: ['hover'],
      borderOpacity: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
