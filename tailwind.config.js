/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#070a12',
          900: '#0b0f1a',
          850: '#0f1422',
          800: '#141a2b',
          700: '#1c2436',
          600: '#28324a',
        },
        brand: {
          50: '#eefcf6',
          100: '#d6f7e8',
          200: '#aeedd3',
          300: '#7ce0b8',
          400: '#3fce95',
          500: '#16b67f',
          600: '#0a9468',
          700: '#0a7456',
          800: '#0c5c47',
          900: '#0d4b3c',
        },
        accent: {
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(63,206,149,0.18), 0 18px 60px -20px rgba(63,206,149,0.35)',
        card: '0 24px 60px -28px rgba(0,0,0,0.7)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 0.6s ease both',
        float: 'float 5s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};
