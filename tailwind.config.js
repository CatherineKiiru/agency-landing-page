/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  tailwindConfig: './styles/tailwind.config.js',
  theme: {
    screens:{
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        softRed: 'hsl(7, 99%, 70%)',
        yellow: 'hsl(51, 100%, 49%)',
        darkCyan: 'hsl(167, 40%, 24%)',
        darkBlue: 'hsl(198, 62%, 26%)',
        mediumCyan: 'hsl(168, 34%, 41%)',
        veryDarkBlue: 'hsl(212, 27%, 19%)',
        darkGrayBlue: 'hsl(213, 9%, 39%)',
        grayishBlue: 'hsl(210, 4%, 67%)',
        white: 'hsl(0, 0%, 100%)',
        skyBlue: '#40bcf9'
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      backgroundImage: {
        
        'headerMobile': "url('/images/mobile/image-header.jpg')",
        'headerDesktop': "url('/images/desktop/image-header.jpg')",
        'mobileCherry': "url('/images/mobile/image-graphic-design.jpg')",
        'mobileOrange': "url('/images/mobile/image-photography.jpg')",
        'desktopCherry': "url('/images/desktop/image-graphic-design.jpg')",
        'desktopOrange': "url('/images/desktop/image-photography.jpg')",
        
      },
    },
  },
  plugins: [],
}
