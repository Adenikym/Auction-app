module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/img/melanie-weidmann.jpg')",
      },
    },
    container: {
      center: true,
    },
    colors: {
      'c-blue': '#725BDA',
    },
  },
  plugins: [],
};
