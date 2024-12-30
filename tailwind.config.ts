/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "rgb(var(--foreground-rgb))",
        background: {
          start: "rgb(var(--background-start-rgb))",
          end: "rgb(var(--background-end-rgb))",
        },
      },
      minHeight: {
        screen: "100vh",
        "screen-small": "100svh",
      },
    },
  },
  plugins: [],
};
