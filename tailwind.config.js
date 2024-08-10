/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
