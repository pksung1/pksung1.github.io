const SIZE = {
  HEADER: '3rem'
}

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        screen: '100vh'
      },
      fontFamily: {
        display: ['Noto Sans KR', 'Montserrat', 'system-ui', '-apple-system', 'BlinkMacSystemFont',
        "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif',
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        title: ['The Nautigal', "Noto Sans", 'sans-serif']
      },
    },
  },
  plugins: [],
}