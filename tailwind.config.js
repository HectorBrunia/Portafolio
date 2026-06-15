/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/swiper/swiper.min.css",
  ],
  theme: {
    extend: {
      keyframes: {
        gradientRadial: {
          "0%, 100%": {
            background: "radial-gradient(circle at top left, #5f00ba, #000000)",
          },
          "50%": {
            background:
              "radial-gradient(circle at bottom right, #2d006b, #000000)",
          },
        },
      },
      colors: {
        bgSoftBlack: "rgb(2, 20, 40)",
        grayText: "rgb(102, 102, 102)",
        navBar: "rgb(17, 17, 17)",
        lightGray: "rgb(90, 90, 90)",
      },
      fontFamily: {
        body: ["Josefin Sans"],
        rubik: ["Rubik"],
        karla: ["Karla"],
      },
    },
  },
  plugins: [],
};
