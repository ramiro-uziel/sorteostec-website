/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "st-blue": "#1b3589",
        "st-blue-light": "#bcdeff",
      },
      screens: {
        mdxl: "1443px",
        mdsm: "1365px",
      },
    },
  },
  plugins: [],
};