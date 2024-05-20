/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "electric-violet": {
          50: "#fcf4ff",
          100: "#f7e7ff",
          200: "#f1d3ff",
          300: "#e6b0ff",
          400: "#d77dff",
          500: "#c74cff",
          600: "#b41ff4",
          700: "#a118d8",
          800: "#8619b0",
          900: "#6e168d",
          950: "#4e0269",
        },
        "my-black": "#141414",
      },
    },
  },
  plugins: [],
};
