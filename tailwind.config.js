module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      wandrDark: "#131313",
      primary: '#df2935',
      secondary: '#246eb9',
      accent: '#ff8811'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
