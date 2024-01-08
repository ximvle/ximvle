/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    // Node modules
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    colors: {
      transparent: 'transparent',

      'primary': '#0A0A0A',
      'secondary': '#121063',
      'accent': '#2f80ed',
      'textColor': '#fff',
      'disable': '#2A2A2A',
      'textDisable': '#7e7e7e',
      'disableBackground': '#131418',

      'white-10': 'rgba(255, 255, 255, 0.1)',

      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    extend: {
      fontFamily: {
        carme: 'carme',
        pressstart2p: 'Press Start 2P',
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
}

