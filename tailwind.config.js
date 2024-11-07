/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
    
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ['12px', '16px'],
      },

  
     

      backgroundImage: {
        'hero-bg':  "url('/src/assets/images/background/bg2.svg')",
        'fooditem': "url('/src/assets/images/background/bg3.svg')",
        'booking': "url('/src/assets/images/background/booking.svg')",
        'commentary': "url('/src/assets/images/background/commentarybg.svg')",
        'commenttext': "url('/src/assets/images/background/commentbg.svg')",
        'footer': "url('/src/assets/images/background/footer.svg')",

        'blog': "url('/src/assets/images/background/blogbg.jpg')",
        'client': "url('/src/assets/images/background/clientbg.jpg')",
        'contact': "url('/src/assets/images/background/contactbg.jpg')",
        'portfolio': "url('/src/assets/images/background/portfolibg.jpg')",
        'about': "url('/src/assets/images/background/aboutbg.jpg')",
     
      },
      
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bebus: ["Bebas Neue", "sans-serif"]
        
      },
      colors: {
        
        "customred": "#BD1F17",
        "ligherpink": "#faf7f2"
      
        
        
      },
      screens: {
        // sm: "740px",
     
      },
    },
  },
  plugins: [],
}