/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    screens: {

      'desktop': '640px',
      // custom desktop size
      /* Important comment: 
          There is another place where the information of desktop is important
          In the "src/Pages/main.js" file, there is 
      */

    },
  },
  plugins: [],
}

