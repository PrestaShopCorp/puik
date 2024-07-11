import '../assets/css/index.css';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  chromatic: { pauseAnimationAtEnd: true },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  options: {
    storySort: {
      order: ['Docs', ['Introduction', 'VueJs Components', 'Css Components']]
    }
  },
  viewport: {
    viewports: {
      sm: {
        name: 'sm',
        styles: {
          width: '640px',
          height: '100%'
        }
      },
      md: {
        name: 'md',
        styles: {
          width: '768px',
          height: '100%'
        }
      },
      lg: {
        name: 'lg',
        styles: {
          width: '1024px',
          height: '100%'
        }
      }
    }
  }
};
