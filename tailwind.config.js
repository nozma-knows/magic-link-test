/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster", "cursive"],
        handrawn: ["Delicious Handrawn", "cursive"],
        caveat: ["Caveat", "cursive"],
        lilita: ["Lilita One", "cursive"],
        rowdies: ["Rowdies", "cursive"],
        overpass: ["Overpass", "sans-serif"],
      },
    },
  },
};
