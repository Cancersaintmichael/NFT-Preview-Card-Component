/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-blue": "#8bacda",
        cyan: "#00fff7",
        main: "#0d192b",
        card: "#14253d",
        divider: "#2f415b",
      },
    },
  },
  plugins: [],
};
