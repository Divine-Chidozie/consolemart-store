/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // keyframes: {
      //   floatZoom: {
      //     "0%, 100%": { transform: "scale(1) rotate(0deg)" },
      //     "50%": { transform: "scale(1.05) rotate(3deg)" },
      //   },
      // },
      // animation: {
      //   "float-zoom": "floatZoom 6s ease-in-out infinite",
      // },
    },
  },
  plugins: [],
};
