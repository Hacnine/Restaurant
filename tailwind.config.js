/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ['12px', '16px'],
      },

  
     

      backgroundImage: {
        // 'hero-img':  "url('public/background/.svg')",
        // 'hero-two':  "url('/src/assets/office-bg.jpg')",
      },
      
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        
      },
      colors: {
        
        "dark": "#0f1729",
      
        
        
      },
      screens: {
        // sm: "740px",
     
      },
    },
  },
  plugins: [],
}