/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Expletus Sans", "Arial"],
        content: ["Raleway", "Arial"]
      },
      fontSize: {
        md:"16px",
        lg:"24px",
        xl: "28px"
      },
      colors: {
        "green": "#38adc2",
        "pink": "#f08080",
        "dark": "#272727"
      }
    },
  },
  plugins: [],
}