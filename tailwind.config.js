/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['ClashDisplay', 'sans-serif'],
      },
      colors: {
        primary: '#2563EB',
        success: '#059669',
        background: '#F9FAFB',
        content: '#1F2937',
      },
      spacing: {
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
      },
      boxShadow: {
        'card': '0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 4px 16px -4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};