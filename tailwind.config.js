/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: { 
      fontFamily:{
        inter:"Inter, sans-serif;",
      },
      backgroundImage:{
        'background_img' : "url('src/assets/back.png')"
      },
      colors:{
        primary: "#1B3351",
        pup:"#240621",
        first:"rgb(15, 23, 42)",
        second:"rgb(88, 28, 135)",
        third:"rgb(15, 23, 42)"
      }
    },
  },
  plugins: [],
};


