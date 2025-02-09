/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FF8911",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        oswald: ['"Oswald", "sans-serif"'],
        fredoka: ['"Fredoka", "sans-serif"'],
        montez: ['"Montez", "cursive"'],
        inter: ['"Inter", "sans-serif"'],
      },
      colors: {
        blueisGray: "#1CA8CB",
        smokeColor: "#E9F6F9",
        titleColor: "#113D48",
        lemonYellow: "#FEF250",
        // lemonYellow: "#ffbf4f",
        // lemonYellow: "#FBD149",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};
