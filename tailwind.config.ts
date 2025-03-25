import { heroui } from "@heroui/react";

import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
      colors: {
        'blue-chill': '#0e969a',
        'java': '#20dae4',
        'corn': '#EFBF04',
        'charcoal-gray': '#4A4A4A',
        'cerulean': '#04A9EF',
        'off-white': '#acacac',
        'dark-blue': '#02658f',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()]
}

export default config;