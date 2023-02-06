/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        white_my: '#fff;',
        blue_400_my: '#2ea8e6;',
        blue_500_my: '#1698d9;',
        red_400_my: '#e62e7a;',
        red_500_my: '#d91667;',
        gray_400_my: '#9ca3af;',
        gray_700_my: '#666666;',
        amber_200_my: '#ffff66;'

        
      }
    },
  },
  plugins: [],
  corePlugins: {
   backgroundOpacity: false,
  }
}

