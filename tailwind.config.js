/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          sourceSans: ["Source Sans 3", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  