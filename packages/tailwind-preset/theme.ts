export default {
  extend: {
    colors: {
      primary: {
        get DEFAULT() {
          return this['800']
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
        500: '#DECDE7',
        700: '#7B4FAC',
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
        700: '#2942CC',
      },
      'ocean-blue': {
        get DEFAULT() {
          return this['500']
        },
        50: '#E4F4F8',
        500: '#A4DBE8',
        700: '#5C92AA',
      },
      yellow: {
        get DEFAULT() {
          return this['500']
        },
        50: '#FFF5E5',
        100: '#FFECCC',
        300: '#FFD999',
        500: '#ffA000',
      },
      amber: {
        get DEFAULT() {
          return this['500']
        },
        100: '#FDF6DD',
        500: '#F8E08E',
      },
      green: {
        get DEFAULT() {
          return this['500']
        },
        get marketing() {
          return this['100']
        },
        50: '#EAF8EF',
        100: '#BDE9C9',
        300: '#59AF70',
        500: '#207F4B',
      },
    },
    fontFamily: {
      primary: ['IBM Plex Sans', 'Verdana', 'Arial', 'sans-serif'],
      secondary: ['Prestafont', 'Verdana', 'Arial', 'sans-serif'],
      materialIcons: ['Material Icons Round'],
    },
    fontSize: {
      '4xl': '2rem',
    },
    screens: {
      xs: '320px',
    },
    boxShadow: {
      overlay: '0px 12px 60px 0px rgba(0, 0, 0, 0.1)',
      sticky: '0px 6px 12px rgba(0, 0, 0, 0.1)',
      'pop-modal': '0px 12px 24px rgba(0, 0, 0, 0.1)',
    },
  },
}
