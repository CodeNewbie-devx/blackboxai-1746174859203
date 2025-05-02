/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a', // dark blue
        accent: '#facc15', // bright yellow accent
        secondary: '#6b7280', // gray-500
        background: '#ffffff',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
