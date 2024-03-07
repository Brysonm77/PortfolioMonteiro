/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        galaxy: {
          darkblue: "#0a0f38",
          purple: "#1d1e5f",
          lightpurple: "#2a3b8f",
          deepurple: "#3E0B51",
          brightpurple: "#7D5BA6",
          white: "#ffffff",
          black: "#000000",
        },
      },
    },
  },
  plugins: [],
};
