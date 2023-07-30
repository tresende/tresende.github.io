/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        greenyellow: {
          light: '#ADFF2F',
          DEFAULT: '#ADFF2F',
          dark: '#ADFF2F'
        }
      }
    }
  },
  plugins: []
}
