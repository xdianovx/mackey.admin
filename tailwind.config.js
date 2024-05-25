/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#7047EB",
        border: "#EBEBEF",
        green: "#17663A",
        gray: "#8A8AA3",
        red: "#D50B3E",
        black: "#121217",
      },
    },
  },
  plugins: [],
};
