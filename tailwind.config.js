/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend:{

      screens: {
        'tablet': '700px',
        // => @media (min-width: 700px) { ... }

        'lgplus': '1200px',
        // => @media (min-width: 1100px) { ... }

        'sm1': '400px',
        // => @media (min-width: 1100px) { ... }

        
      },

      fontFamily: {
        main:["'Roboto', Arial, serif"]
      },
      width:{
        khadi:["31rem"]
      },

      
    },
  },

  plugins: [],
}

