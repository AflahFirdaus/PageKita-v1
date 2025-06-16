/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        'slide-top': 'slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
      },
      keyframes: {
        'slide-top': {
          '0%': {
            transform: 'translateY(100px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(157.81deg, #def9fa -43.27%, #bef3f5 -21.24%, #9dedf0 12.19%, #7de7eb 29.82%, #5ce1e6 51.94%, #33bbcf 90.29%)',
        'black-gradient': 'linear-gradient(144.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61%)',
        'black-gradient-2': 'linear-gradient(-168.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61%)',
        'gray-gradient': 'linear-gradient(153.47deg, rgba(255, 255, 255, 0) -341.94%, #14101d 95.11%)',
        'text-gradient': 'radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)',
        'blue-gradient-2': 'linear-gradient(180deg, rgba(188, 165, 255, 0) 0%, #214d76 100%)',
        'pink-gradient': 'linear-gradient(90deg, #f4c4f3 0%, #fc67fa 100%)',
      },
      boxShadow: {
        'card': '0px 20px 100px -10px rgba(66, 71, 91, 0.1)',
      },
      blur: {
        '123': '123px',
        '750': '750px',
        '900': '900px',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
} 