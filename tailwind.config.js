/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: { fontFamily: {
        press: ["'Press Start 2P'", "cursive"],
      },
    },
  },
  plugins: [],
}

