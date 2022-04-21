module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/line-clamp')],
  theme: {
    colors: {
      black: {
        DEFAULT: '#161100',
        dark: '#000000',
      },
      grey: {
        DEFAULT: '#F0F0F0',
        dark: '#D0D0D0',
        light: '#F9F9F9',
      },
      red: '#F46F6F',
      transparent: 'transparent',
      white: '#FFFFFF',
      yellow: {
        DEFAULT: '#FFD642',
        dark: '#DDAD00',
      },
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        moonget: ['Moon-Get', 'sans-serif'],
      },
    },
  },
};
