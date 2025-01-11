import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "node_modules/@nextui-org/**/*.{js,ts,jsx,tsx,mjs}",
  ],
  darkMode: "class",

  theme: {
    extend: {},
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#f8fafc",
            success: "#00C5B0",
            secondary: {
              400: "#8b5cf6",
            },
            content3: "#6b7280",
          },
        },
        dark: {
          colors: {
            background: "#121212",
            success: "#22d3ee",
            secondary: {
              400: "#9333ea",
            },
            content3: "#e5e7eb",
          },
        },
      },
    }),
  ],
};
export default config;
