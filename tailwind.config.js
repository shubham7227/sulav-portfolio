/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1f1f1f",
        backgroundSecondary: "#292929",
        backgroundLight: "#4D4D4D",
        primary: "#ffffff",
        textSecondary: "#898989",
        textDim: "#CCCCCC",
      },
      fontFamily: {
        prompt: ["Prompt", "sans-serif"],
        karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
