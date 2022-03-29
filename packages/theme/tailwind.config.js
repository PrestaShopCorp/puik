module.exports = {
  content: ['./src/**/*.scss'],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: {
            50: '#E9E6F8',
            100: '#C7C0EE',
            500: '#442CC7',
            700: '#3521BA',
            900: '#1F10A6',
          },
        },
        accentuation: {
          destructive: {
            50: '#FAE7E8',
            100: '#F2C2C5',
            500: '#D5343C',
            700: '#CA272E',
            900: '#BA151A',
          },
          success: {
            50: '#E4F0EA',
            100: '#BCDACA',
            500: '#21834D',
            700: '#18703D',
            900: '#0B5325',
          },
          warning: {
            50: '#FFF4E0',
            100: '#FFE3B3',
            500: '#FFA000',
            700: '#FF8E00',
            900: '#FF7300',
          },
          info: {
            50: '#E3EAFD',
            100: '#B9CAFA',
            500: '#174EEF',
            700: '#113DEB',
            900: '#0725E4',
          },
        },
        font: {
          main: '#363A41',
          disabled: '#D7D8D9',
          50: '#EDEEF0',
          100: '#D2D4D9',
          500: '#697180',
        },
        background: {
          grey: '#FAFAFB',
        },
        border: {
          main: '#C8D7E4',
          decorative: '#E1E0EB',
        },
        focus: {
          main: '#458FFF',
        },
        brand: {
          pink: '#E6006B',
          darkBlue: '#011638',
        },
      },
      fontFamily: {
        primary: ['Inter', 'Verdana', 'Arial', 'sans-serif'],
        secondary: ['Roboto', 'Verdana', 'Arial', 'sans-serif'],
        materialIcons: ['Material Icons'],
      },
      fontSize: {
        '4xl': '2rem',
      },
      screens: {
        xs: '320px',
      },
      boxShadow: {
        overlay: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        sticky: '0px 6px 12px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
