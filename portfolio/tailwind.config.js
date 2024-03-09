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
      backgroundImage: {
        "galaxy-gradient":
          "linear-gradient(to right, #1d1e5f, #3E0B51, #0a0f38, #7D5BA6)",
      },
    },
  },
  plugins: [],
};
