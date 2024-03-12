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
        },
      },
      backgroundImage: {
        "galaxy-gradient":
          "linear-gradient(to right, #1d1e5f, #3E0B51, #0a0f38, #7D5BA6)",
        "galaxy-inv": "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      spacing: {
        21: "6rem",
        22: "7rem",
        23: "8rem",
        24: "9rem",
        25: "10rem",
        26: "11rem",
        27: "12rem",
        28: "13rem",
        29: "14rem",
        30: "15rem",
        31: "16rem",
        32: "17rem",
        33: "18rem",
        34: "19rem",
        35: "20rem",
        36: "21rem",
        37: "22rem",
        38: "23rem",
        39: "24rem",
        40: "25rem",
      },
    },
  },
  plugins: [],
};
