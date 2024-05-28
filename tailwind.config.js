/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-blue": {
          50: "#C0F2FF",
          100: "#AAEEFF",
          200: "#8EE8FF",
          300: "#69E1FF",
          400: "#37D7FF",
          500: "#00C2F3",
          600: "#00A5CE",
          700: "#008CAF",
          800: "#007795",
          900: "#00657F",
        },
        "my-black": "#141414",
        "gray": "#BDBDBD"
      },
    },
  },
  plugins: [],
};
