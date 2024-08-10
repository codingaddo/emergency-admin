/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "320px",
      md: "868px",
      lg: "869px",
      xl: "1440px",
    },
  },
  plugins: [],
};
