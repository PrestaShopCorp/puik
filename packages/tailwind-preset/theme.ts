import animations from './animations';
export default {
  extend: {
    colors: {
      primary: {
        get DEFAULT() {
          return this['800'];
        },
        100: '#FFFFFF',
        200: '#F7F7F7',
        300: '#EEEEEE',
        400: '#DDDDDD',
        500: '#BBBBBB',
        600: '#5E5E5E',
        700: '#3F3F3D',
        800: '#1D1D1B'
      },
      red: {
        get DEFAULT() {
          return this['500'];
        },
        50: '#FFE4E6',
        100: '#FDBFBF',
        300: '#D63F3C',
        500: '#BA151A',
        700: '#A41913'
      },
      purple: {
        get DEFAULT() {
          return this['500'];
        },
        50: '#F8F0F7',
        500: '#DECDE7',
        700: '#7B4FAC'
      },
      blue: {
        get DEFAULT() {
          return this['500'];
        },
        get pressed() {
          return this['700'];
        },
        50: '#E8EDFD',
        100: '#D1DCFC',
        300: '#A2B8F9',
        500: '#174EEF',
        700: '#2942CC'
      },
      'ocean-blue': {
        get DEFAULT() {
          return this['500'];
        },
        50: '#E4F4F8',
        500: '#A4DBE8',
        700: '#5C92AA'
      },
      yellow: {
        get DEFAULT() {
          return this['500'];
        },
        50: '#FFF5E5',
        100: '#FFECCC',
        300: '#FFD999',
        500: '#ffA000'
      },
      amber: {
        get DEFAULT() {
          return this['500'];
        },
        100: '#FDF6DD',
        500: '#F8E08E'
      },
      green: {
        get DEFAULT() {
          return this['500'];
        },
        get marketing() {
          return this['100'];
        },
        50: '#EAF8EF',
        100: '#BDE9C9',
        300: '#59AF70',
        500: '#207F4B'
      }
    },
    fontFamily: {
      primary: ['IBM Plex Sans', 'Verdana', 'Arial', 'sans-serif'],
      secondary: ['Prestafont', 'Verdana', 'Arial', 'sans-serif'],
      materialIcons: ['Material Icons Round']
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1.125rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.375rem' }],
      lg: ['1.125rem', { lineHeight: '1.375rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.625rem' }],
      '5xl': ['3rem', { lineHeight: '3.625rem' }]
    },
    screens: {
      xs: '320px'
    },
    opacity: {
      overlay: '0.8'
    },
    boxShadow: {
      DEFAULT: '0px 1px 3px 0px rgba(29, 29, 27, 0.2)',
      sm: '0px 1px 2px 0px rgba(29, 29, 27, 0.05)',
      md: '0px 4px 6px -1px rgba(29, 29, 27, 0.2)',
      lg: '0px 10px 15px -3px rgba(29, 29, 27, 0.2)',
      xl: '0px 20px 25px -5px rgba(29, 29, 27, 0.2)',
      '2xl': '0px 25px 60px -12px rgba(29, 29, 27, 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      none: 'none',
      overlay: '0px 12px 60px 0px rgba(0, 0, 0, 0.1)',
      sticky: '0px 6px 12px rgba(0, 0, 0, 0.1)',
      'pop-modal': '0px 12px 24px rgba(0, 0, 0, 0.1)'
    },
    ...animations
  }
};
