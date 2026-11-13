/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Dark theme monochrome palette
        dark: {
          bg: '#050505',
          secondary: '#0D0D11',
          card: '#18181B',
          surface: '#27272A',
          border: '#303036',
          borderSubtle: '#27272A',
          textPrimary: '#F5F5F5',
          textSecondary: '#A1A1AA',
          muted: '#71717A',
        },
        // Light theme monochrome palette
        light: {
          bg: '#F7F5F3',
          secondary: '#EFECE6',
          card: '#FFFFFF',
          surface: '#EEEEEE',
          border: '#E5E5E5',
          borderSubtle: '#E4E4E7',
          textPrimary: '#111111',
          textSecondary: '#71717A',
          muted: '#A1A1AA',
        },
      },
    },
  },
  plugins: [],
};
