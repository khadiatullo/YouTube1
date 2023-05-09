/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend:{

      minWidth: {
        'avatarka': '2.25rem',
      },

      borderRadius: {
        'large': '50%',
      },

      screens: {

        'xl-xl': '1424px',

        'tablet': '700px',
        // => @media (min-width: 700px) { ... }

        'lgplus': '1200px',
        // => @media (min-width: 1200px) { ... }

        'sm1': '700px',
        // => @media (min-width: 700px) { ... }

        'smsmall': '400px',
        // => @media (min-width: 400px) { ... }

        'smsmalll': '500px',
        // => @media (min-width: 400px) { ... }

        'mobile': '364px',
        // => @media (min-width: 364px) { ... }

        'mob': '359px',
        // => @media (min-width: 364px) { ... }

        'mobpr': '340px',
        // => @media (min-width: 364px) { ... }

        'mobilesmart': '280px',
        // => @media (min-width: 280px) { ... }
      },

      fontFamily: {
        main:["'Roboto', Arial, serif"]
      },

      width:{
        khadi:["31rem"]
      },

      height:{
        shortsss:["25rem"]
      }


    },
  },

  plugins: [],
}

