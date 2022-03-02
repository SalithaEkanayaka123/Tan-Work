module.exports = {
  content: [],
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('tailwind-scrollbar-hide')],
}
