/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["poppins", "sans-serif"],
      },

      colors: {
        primary: [" #FF9D3D"],
      },
    },
  },
  plugins: [],
};
