/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "border-animation": {
          "0%": {
            borderRadius: "61% 39% 81% 19% / 29% 71% 29% 71% ",
          },
          "25%": {
            borderRadius: "75% 25% 55% 45% / 50% 71% 29% 50% ",
          },
          "50%": {
            borderRadius: "40% 60% 67% 33% / 65% 46% 54% 35% ",
          },
          "75%": {
            borderRadius: "63% 37% 50% 50% / 40% 34% 66% 60% ",
          },
          "100%": {
            borderRadius: "26% 74% 20% 80% / 74% 25% 75% 26% ",
          },
        }
      },
      animation: {
        "border-animation": "border-animation 5s linear infinite", // You can adjust the animation duration and iteration count as needed
      },
      
    },
  },
  plugins: [],
}
