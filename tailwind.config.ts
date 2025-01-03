import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    container:{
      padding:{
        DEFAULT : '20px',
        sm: "40px",
        lg: "60px",
        xl: "80px",
        
      },
      screens:{
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: "1280px",
      },
      center: true

    },
    colors:{
      primary: "#03045E",
      secondary: "#00B4D8",
      accent: "#76E5A9",
      light: "#CAF0F8",
      background: "#F3F6F8",
      white: "#ffffff",
      black: "#000000",
      gray: "#999999",
      red: "#FF6C47",
      yellow: "#E8F08B",
      purple: "#BFABD2"
    },




    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
