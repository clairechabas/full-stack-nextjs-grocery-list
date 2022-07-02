/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Adding paths to `pages` and `components` folders
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
