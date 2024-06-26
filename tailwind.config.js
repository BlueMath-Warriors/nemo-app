/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        mb: "500px",
      },
      colors: {
        "nemo-dark": "#348b92",
        "nemo-light": "#FFFFFF",
        "nemo-blue-light": "#e8fffc",
        "nemo-dark-green": "#0c343d",
        "nemo-dark-graph": "#24767c",
      },
    },
  },
  plugins: [],
};
