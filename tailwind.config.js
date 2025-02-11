/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["light", "dark", "cupcake","black"],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background :"var(--background)",
        mainColor :"var(--mainColor)",
        textColor :"var(--textColor)",
        whiteText :"var(--whiteText)",
        bgTransparent :"var(--bgTransparent)",
    
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

