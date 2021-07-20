module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      'footer-top': '#424242',
      'footer-bottom': '#333'
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
