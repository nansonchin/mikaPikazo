/** @type {import('tailwindcss').Config} */
export default{
  content: [
    // Ensure this points to your source code
    './src/**/*.{js,jsx,ts,tsx}','./components/**/*.{js,tsx,ts,jsx}'
    // If you use a `src` directory, add: './src/**/*.{js,tsx,ts,jsx}'
    // Do the same with `components`, `hooks`, `styles`, or any other top-level directories
  ],
  theme: {
    extend: {
      primary:'#080403',
      secondary:"#F7F7F7",
      red:"#F40404",
      orange:"#FFDC22",
      login_green:"#CBFF4A",
      light:{
        100: "#",
        200: "#",
        300: "#",
      },
      dark:{
        100: "#",
        200: "#",
      }
    },
  },
  plugins: [],
};
