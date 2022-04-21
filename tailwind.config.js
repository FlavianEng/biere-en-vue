module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    colors: {
      black: '#161100',
      grey: {
        DEFAULT: '#F0F0F0',
        dark: '#D0D0D0',
        light: '#F9F9F9',
      },
      transparent: 'transparent',
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
