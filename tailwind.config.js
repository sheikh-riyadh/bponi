/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btn: "rgba(var(--btn))",
        primary:"rgba(var(--primary))",
        pg:"rgba(var(--background))"
      },
    },
  },
  plugins: [],
};
