/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {},
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('@tailwindcss/typography')],
}
