/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: ["./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      primary: "#233876",
      secondary: "#6088F2",
      hover: "#338dff",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
