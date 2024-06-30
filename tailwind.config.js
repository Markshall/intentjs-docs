/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./theme.config.jsx",
  ],
  theme: {
    colors: {
      primary: "#99e600",
    },
    extend: {},
  },
  plugins: [],
};
