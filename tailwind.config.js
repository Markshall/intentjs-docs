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
      bgcolor: "#111111",
      main: "#98D422",
      darkfont: "#ffffff",
    },
    extend: {},
  },
  plugins: [],
};
