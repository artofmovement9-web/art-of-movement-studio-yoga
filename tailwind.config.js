/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: '#F5EDE3',
        olive: '#6B9E78',
        'olive-light': '#8BC49A',
        'soft-beige': '#FAF7F2',
        'off-white': '#FFFFFF',
        'muted-black': '#1A1A1A',
        'warm-glow': '#E8B87D',
        'soft-sage': '#EDF4ED',
        'cream': '#FFF9F0',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slower': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
