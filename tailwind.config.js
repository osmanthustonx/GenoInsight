/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#2196f3",
          darker: "#0048BA",
          lighter: "#64B5F6",
          subtle: "#E3EDFF",
        },
        secondary: {
          main: "#4CAF50",
          darker: "#008000",
          lighter: "#81C784",
          subtle: "#E8F5E9",
        },
        red: "#FF3B3B",
      },
      fontSize: {
        d1: ["48px", "62.4px"],
        d2: ["40px", "52px"],
        h1: ["44px", "57.2px"],
        h2: ["36px", "46.8px"],
        h3: ["28px", "36.4px"],
        h4: ["24px", "31.2px"],
        h5: ["20px", "26px"],
        h6: ["16px", "20.8px"],
        lp: ["22px", "33px"],
        bl: ["20px", "20.8px"],
        bm: ["18px", "30.6px"],
        bn: ["16px", "27.2px"],
        bm: ["14px", "23.8px"],
      },
    },
  },
  plugins: [],
};
