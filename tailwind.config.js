/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Raleway: ["Raleway", "sans-serif"],
      Avenir: ["Avenir-Black", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "bg-pattern": "url('src/assets/images/bg-img.png')",
      },
      colors: {
        grey: "rgb(227, 227, 227)",
        brandRed: "rgb(231, 29, 29)",
        slateGrey: "rgb(64, 64, 64)",
      },
    },
  },
  plugins: [],
};
