/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#020617",
        secondary: "#94a3b8",
        tertiary: "#0f172a",
        "black-100": "#1e293b",
        "black-200": "#020617",
        "white-100": "#f8fafc",
        cyan: "#06b6d4",
        teal: "#14b8a6",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
