/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      lighter: "#D7B283",
      darker: "#132745",

      fontLighter: "#ffffff",
      fontDarker: "#000000",
    },
    fontFamily: {
      mainFont: ["Merriweather", "sans-serif"],
      secondFont: ["Merriweather", "sans-serif"],
    },
    fontSize: {
      paragraph1: "0.625rem",
      paragraph2: "0.75rem",
      paragraph3: "0.875rem",
      paragraph4: "1rem",
      paragraph5: "1.125rem",
      title1: "1.25rem",
      title2: "1.375rem",
      title3: "1.5rem",
      title4: "1.875rem",
      title5: "2.25rem",
      title6: "3rem",
      title7: "3.5rem", // 55px
    },
  },
};
// export const plugins = [require("tailwindcss-gradients")];
