module.exports = {
  extend: {
    colors: {
      primary: {
        get DEFAULT() {
          return this['500']
        },
        50: '#FFFFFF',
        100: '#F7F7F7',
        200: '#EEEEEE',
        300: '#BBBBBB',
        400: '#DDDDDD',
        500: '#1D1D1B',
        700: '#1D1D1B',
        900: '#1D1D1B',
      },
      accentuation: {
        destructive: {
          get DEFAULT() {
            return this['500']
          },
          50: '#FAE7E8',
          100: '#F2C2C5',
          200: '#EA9A9E',
          500: '#D5343C',
          700: '#CA272E',
          900: '#BA151A',
        },
        success: {
          get DEFAULT() {
            return this['500']
          },
          50: '#E4F0EA',
          100: '#BCDACA',
          200: '#90C1A6',
          500: '#21834D',
          700: '#18703D',
          900: '#0B5325',
        },
        warning: {
          get DEFAULT() {
            return this['500']
          },
          50: '#FFF4E0',
          100: '#FFE3B3',
          200: '#FFD080',
          500: '#FFA000',
          700: '#FF8E00',
          900: '#FF7300',
        },
        info: {
          get DEFAULT() {
            return this['500']
          },
          50: '#E3EAFD',
          100: '#B9CAFA',
          200: '#8BA7F7',
          500: '#174EEF',
          700: '#113DEB',
          900: '#0725E4',
        },
      },
      font: {
        get DEFAULT() {
          return this['900']
        },
        get disabled() {
          return this['100']
        },
        get secondary() {
          return this['500']
        },
        50: '#E6E8EA',
        100: '#C1C5CA',
        200: '#989EA7',
        500: '#505969',
        700: '#272E3E',
        900: '#131A26',
      },
      'light-blue': {
        get background() {
          return this['50']
        },
        get 'decorative-border'() {
          return this['300']
        },
        get 'default-border'() {
          return this['500']
        },
        50: '#F8FAFC',
        100: '#EFF3F7',
        200: '#E4EBF2',
        300: '#D9E3EC',
        500: '#C8D7E4',
        700: '#BBCDDD',
        900: '#A7BED1',
      },
      focus: {
        main: '#458FFF',
      },
      brand: {
        pink: '#E6006B',
        'dark-blue': '#011638',
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
