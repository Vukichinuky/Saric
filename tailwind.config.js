/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/bg.svg')",
      }, screens: {
        "2xl": { max: "1535px" },
      },
      height: {
        "screen-2/3": "calc(100vh - 1/3*100vh)", // Calculate the height of the page
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fade: "fade 1s ease-out",
      },
    },

  },
  plugins: [],
}