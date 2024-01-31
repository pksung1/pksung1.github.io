const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/sections/**/*.{js,jsx,ts,tsx}`,
    `./src/layouts/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    fontSize: {
      'xs': ['0.75rem', '1rem'],
      'sm': ['0.875rem', '1rem'],
      'base': ['1rem', '1.5rem'],
      'lg': ['1.125rem', '1.75rem'],
      'xl': ['1.5rem', '1.75rem'],
      '2xl': ['2rem', '2.25rem'],
    },
    extend: {
      fontFamily: {
        common: ["Pretendard", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
      width: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      }
    },
  },
  plugins: [],
}
