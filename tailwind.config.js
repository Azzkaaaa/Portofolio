

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          primary: "#b62641",
        },
        Container: {
          center: true,
          padding: {
            DEFAULT: "1rem",
            sm: "3rem",
          },
        },
      },
    },
  },
  plugins: [],
};
