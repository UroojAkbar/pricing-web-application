/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Lblue: "#8FD1D7",
        Grayish: "#E4E4E4",
        BtnColor: "#50C2C9",
        BGbluish: "#50C2C9",
      },
    },
  },
  plugins: [],
};
