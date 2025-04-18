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
      screens: {
        'phone': '360px',
        'phone-xs': { 'raw': '((min-width: 360px) and (min-height: 640px))' },
        'phone-xs-md': { 'raw': '((min-width: 360px) and (min-height: 667px))' },
        'phone-sm-sm': { 'raw': '((min-width: 360px) and (min-height: 720px))' },
        'phone-sm': { 'raw': '((min-width: 360px) and (min-height: 740px))' },
        'phone-md': { 'raw': '((min-width: 360px) and (min-height: 780px))' },
        'phone-lg': { 'raw': '((min-width: 360px) and (min-height: 800px))' },
        'phone-lg-md': { 'raw': '((min-width: 360px) and (min-height: 800px))' },
        'phone-xl': { 'raw': '((min-width: 360px) and (min-height: 844px))' },
        'phone1': '375px',
        'phone1-sm': { 'raw': '((min-width: 375px) and (min-height: 667))' },
        'phone1-md': { 'raw': '((min-width: 375px) and (min-height: 812px))' },
        'phone2': '390px',
        'phone2-md': { 'raw': '((min-width: 390px) and (min-height: 844px))' },
        'phone3': '412px',
        'phone3-sm': { 'raw': '((min-width: 412px) and (min-height: 732px))' },
        'phone3-md-sm': { 'raw': '((min-width: 412px) and (min-height: 800px))' },
        'phone3-md': { 'raw': '((min-width: 412px) and (min-height: 823px))' },
        'phone3-md-lg': { 'raw': '((min-width: 412px) and (min-height: 846px))' },
        'phone3-md-xl': { 'raw': '((min-width: 412px) and (min-height: 883px))' },
        'phone3-lg-sm': { 'raw': '((min-width: 412px) and (min-height: 892px))' },
        'phone3-lg': { 'raw': '((min-width: 412px) and (min-height: 914px))' },
        'phone4': '425px',
        'phone5': '450px',
        'phone6': '523px',
        'phone7': '600px',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()]
}

export default config;