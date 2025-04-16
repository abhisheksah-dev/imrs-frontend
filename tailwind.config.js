/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // This makes Poppins the default font for 'font-sans'
      },
      animation: {
        marquee: "marquee 15s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(100%)", // Start from the right
          },
          "100%": {
            transform: "translateX(-100%)", // End off-screen to the left
          },
        },
      },
    },
  },
  plugins: [],
}

