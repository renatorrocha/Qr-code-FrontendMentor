/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: "Outfit",
      },

      colors: {
        white: "hsl(0, 0%, 100%)",
        Light_gray: "hsl(212, 45%, 89%)",
        Grayish_blue: "hsl(220, 15%, 55%)",
        Dark_blue: "hsl(218, 44%, 22%)",
      },
    },
  },
  plugins: [],
};
