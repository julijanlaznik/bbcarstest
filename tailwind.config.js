
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./App.tsx",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Syne"', 'sans-serif'],
        sans: ['"Outfit"', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.15em',
        'tighter-extra': '-0.04em',
      }
    },
  },
  plugins: [],
}
