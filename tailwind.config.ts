import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'arctic':   '#F1F6F4',
        'mint':     '#D9E8E2',
        'forsythia':'#FFC801',
        'saffron':  '#FF9932',
        'nocturnal':'#114C5A',
        'noir':     '#172B36',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;