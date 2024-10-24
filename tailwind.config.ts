import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const flowbite = require("flowbite-react/tailwind");


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/**/*.js', 
    
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(),    flowbite.plugin(),
    require('flowbite/plugin')

  ]
};
export default config;
