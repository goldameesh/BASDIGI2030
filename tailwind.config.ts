import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-blue': {
          deep: '#0B1B4D',
          deeper: '#091540',
          dark: '#050D2A',
        },
        'navy-card': '#0F1F55',
        'marble': {
          bg: '#F8F8FF',
        },
        gold: {
          primary: '#C9A84C',
          highlight: '#E8C96D',
          muted: 'rgba(201, 168, 76, 0.25)',
          atmosphere: 'rgba(201, 168, 76, 0.07)',
        },
        'white-primary': '#FFFFFF',
        'soft-white': '#E2E8F0',
        'body-muted': '#CBD5E1',
        placeholder: '#64748B',
      },
      screens: {
        'xs': '375px',
        'sm': '430px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1920px',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01))',
      },
    },
  },
  plugins: [],
};
export default config;
