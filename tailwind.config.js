module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        34: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
        11: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        42: "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
        55: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
        58: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
