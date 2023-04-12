module.exports = {
  extend: {
    colors: {
      primary: {
        get DEFAULT() {
          return this['500']
        },
        100: '#FFFFFF',
        200: '#F7F7F7',
        300: '#EEEEEE',
        400: '#DDDDDD',
        500: '#BBBBBB',
        600: '#5E5E5E',
        700: '#3F3F3D',
        800: '#1D1D1B',
      },
      red: {
        get DEFAULT() {
          return this['500']
        },
        50: '#FFE4E6',
        100: '#FDBFBF',
        300: '#D63F3C',
        500: '#BA151A',
        700: '#A41913',
      },
      purple: {
        get DEFAULT() {
          return this['500']
        },
        50: '#F8F0F7',
        500: '#D7AED3', // TODO HERE same as below
        700: '#D7AED3',
      },
      blue: {
        get DEFAULT() {
          return this['500']
        },
        get pressed() {
          return this['700']
        },
        50: '#E8EDFD',
        100: '#D1DCFC',
        300: '#A2B8F9',
        500: '#174EEF',
        700: '#0725E4',
      },
      oceanBlue: {
        get DEFAULT() {
          return this['500']
        },
        50: '#E4F4F8',
        500: '#78C4D8',
        700: '#5C92AA',
      },
      yellow: {
        get DEFAULT() {
          return this['500']
        },
        50: '#FFF5E5',
        100: '#FFECCC',
        300: '#FFD999',
        500: '#ffa000',
      },
      amber: {
        get DEFAULT() {
          return this['500']
        },
        100: '#FDF6DD',
        500: '#F3CB5F',
      },
      green: {
        get DEFAULT() {
          return this['500']
        },
        get marketing() {
          return this['100']
        },
        50: '#E9F3ED',
        100: '#98D9A9',
        300: '#a6CBD8',
        500: '#21834D',
      },
    },
    fontFamily: {
      primary: ['Inter', 'Verdana', 'Arial', 'sans-serif'],
      secondary: ['Roboto', 'Verdana', 'Arial', 'sans-serif'],
      materialIcons: ['Material Icons Round'],
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
      'pop-modal': '0px 12px 24px rgba(0, 0, 0, 0.1)',
    },
  },
}
