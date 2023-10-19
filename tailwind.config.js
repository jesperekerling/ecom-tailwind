/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}