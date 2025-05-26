module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary:  '#080403',
        secondary:'#F7F7F7',
        red:      '#F40404',
        orange:   '#FFDC22',
        login_green: '#CBFF4A'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}