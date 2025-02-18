import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      danger: "#FF3939",
      primary: {
        DEFAULT: "#633CFF",
        100: "#BEADFF",
        200: "#EFEBFF",
      },
      gray: {
        DEFAULT: "#333333",
        100: "#737373",
        200: "#D9D9D9",
        300: "#FAFAFA",
      },
      "button-base": {
        DEFAULT: "#633CFF",
        active: "#BEADFF",
        disabled: "#633CFF",
        300: "#FAFAFA",
      },
    },

    scale: {
      "90": "0.990",
      "95": "0.95",
    },

    borderRadius: {
      DEFAULT: "8px",
      none: "0",
      md: "12px",
    },
    boxShadow: {
      input: "0px 0px 32px 0px rgba(99, 60, 255, 0.25)",
    },
  },
  plugins: [],
};
export default config;
