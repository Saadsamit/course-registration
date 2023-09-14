/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'header': '#1C1B1B',
      'para': '#1C1B1B99',
      'btn': '#2F80ED',
      'bgColor': '#F3F3F3'
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    }
  },
  plugins: [require("daisyui")],
}

