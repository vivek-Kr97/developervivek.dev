/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        righteous: ["Righteous", "sans-serif"],
      },
      keyframes: {
        wipeOpen: {
          "0%": { transform: "scaleX(1)" },
          "100%": { transform: "scaleX(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        wipe: "wipeOpen 1.2s ease-in-out forwards",
        fadeInUp: "fadeInUp 1s ease-out 1.2s forwards",
      },
      container: {
        center: true,
        padding : {
          DEFAULT : '1rem',
          sm : '2rem',
          lg : '4rem',
          xl :'5rem',
         "2xl" : '6rem',
        },
      },
    },
  },
  plugins: [],
}