/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aysa: {
          blue: "#1d2d6c",
          orange: "#ef6c35",
          lightBlue: "#00a8e1",
          gray: "#f4f4f4",
          surface: "#f9f9f9",
          green: "#25d366",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
