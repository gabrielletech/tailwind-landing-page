module.exports = {
  plugins: [
      require('@tailwindcss/aspect-ratio'),
    ],
  darkMode: 'class',
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero': "url('./src/images/hero.jpg')",
      }
    },
  },
  plugins: [],
}
