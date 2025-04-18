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
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
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
        'light-corn': '#FBCC13',
        'dark-corn': '#D4AA04',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()]
}

export default config;