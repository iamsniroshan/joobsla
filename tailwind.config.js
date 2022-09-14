// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./node_modules/react-tailwindcss-select/dist/index.esm.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grayBg:'#f3f2ef',
        sky: colors.sky,
        teal: colors.teal,
        cyan: colors.cyan,
        rose: colors.rose,
        cyan: colors.cyan,
        rose: colors.rose,
        orange: colors.orange,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/aspect-ratio'),
  ],
  corePlugins: {},
};
