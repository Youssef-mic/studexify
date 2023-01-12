/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ultradark:"#000D22",
        dark: "#001029",
        semidark: "#00173B",
        notifications: "#e51515",
        coins: "#f3ca40",
        light: "#f7eef5"
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}
