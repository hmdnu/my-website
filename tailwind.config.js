/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        primary: "#222222",
        secondary: "#555555",
        stroke: "#BEBEBE",
        blue: "#007AB9",
        darkBlue: "#1B262C",
        dark: "#333333",
      },
      borderColor: {
        stroke: "#BEBEBE",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1450px",
      xl: "1700px",
    },
  },
  plugins: [],
};
