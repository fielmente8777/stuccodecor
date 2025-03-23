import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF4F47",
        secondary: "#1C1B1F",
        tertiary: "#6C6B6F",
        quaternary: "#045cb4",
        light: "#CECECE",
        bg1: "#F1F7ED",
      },
    },
  },
  plugins: [],
} satisfies Config;
