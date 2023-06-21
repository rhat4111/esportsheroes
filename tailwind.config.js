/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    textStrokeWidth: (theme) => theme("borderWidth"),
    extend: {
      animation: {
        alarm: "alarm 40s linear infinite",
        modal: "modal 0.3s",
        button: "button 1s linear infinite",
      },
      backgroundImage: {
        alarm: "url('assets/images/bar.png')",
        main: "url('assets/images/bg.png')",
        dot: "url('assets/images/dot-line.png')",
      },
      colors: {
        dark: "#010908",
        success: "#20E586",
        alarm: "#0F4949",
        light: "#EEFBFC",
        secondary: "#B9B9BF",
        darkgreen: "#0B1816",
      },
      fontFamily: {
        oxanium: ["Oxanium", "cursive"],
        roboto: ["Roboto", "sans-serif"],
      },
      height: {
        15: "60px",
        19: "76px",
        25: "100px",
        49: "196px",
        78: "312px",
      },
      keyframes: {
        alarm: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        modal: {
          "0%": { transform: "scale(20%)" },
          "100%": { transform: "scale(100%)" },
        },
        button: {
          "0%": { transform: "scale(90%)", opacity: 1 },
          "100%": { transform: "scale(150%)", opacity: 0 },
        },
      },
      margin: {
        15: "60px",
        18: "72px",
        30: "120px",
        35: "140px",
      },
      maxWidth: {
        57: "228px",
        160: "640px",
        "8xl": "1440px",
      },
      padding: {
        17: "68px",
        25: "100px",
        30: "120px",
        33: "132px",
        35: "140px",
        45: "180px",
        47: "188px",
        67: "268px",
      },
      textStrokeColor: { success: "#20E586" },
      width: {
        15: "60px",
        45: "180px",
        78: "312px",
      },
    },
  },
  plugins: [require("tailwindcss-text-fill-stroke")()],
};
