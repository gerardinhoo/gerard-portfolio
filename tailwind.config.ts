// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'big-shoulders': ['"Big Shoulders"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
