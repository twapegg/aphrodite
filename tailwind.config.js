/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "underline-expand": {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        "underline-expand": "underline-expand 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
