/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF5733",
        secondary: "#0056D2",
        heading: "rgb(10, 9, 89)",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
