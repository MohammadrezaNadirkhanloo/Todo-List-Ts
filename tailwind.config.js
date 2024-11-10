/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ClashGrotesk", ...fontFamily.sans],
      },
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        gray: {
          100: "#F2F2F2",
          200: "#D9D9D9",
          300: "#808080",
          400: "#333333",
          500: "#262626",
          600: "#1A1A1A",
          700: "#0D0D0D",
        },
        blue:{
          dark:"#1E6F9F"
        },
        purple:{
          dark:"#5E60CE"
        }
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#4EA8DE",
          secondary: "#8284FA",
          error: "#E25858",
        },
      },
    ],
  },
};
