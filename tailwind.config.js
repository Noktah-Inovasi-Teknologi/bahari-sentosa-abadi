module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue", 
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Rubik', 'sans-serif']
      }
    }
  },
  plugins: []
}
