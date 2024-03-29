/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#94a3b8",
        dark: "#0f172a",
      },
    },
    screen: {
      '2xl': '1320px'
    }
  },
  plugins: [],
};
