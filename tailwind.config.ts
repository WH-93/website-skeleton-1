import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1120',
          900: '#0B1120',
          800: '#141c2e',
          700: '#1d273d',
        },
        gold: {
          DEFAULT: '#B08D57',
          400: '#B08D57',
          500: '#9a7846',
          600: '#7d6139',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Garamond', 'serif'],
        sans: ['Montserrat', 'Futura', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '4px',
        card: '8px',
      },
      boxShadow: {
        card: '0 4px 20px rgba(0,0,0,0.08)',
        'card-lg': '0 8px 30px rgba(0,0,0,0.12)',
      },
      letterSpacing: {
        wide: '0.05em',
        wider: '0.1em',
      },
    },
  },
  plugins: [],
} satisfies Config;
