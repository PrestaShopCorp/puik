import '../assets/css/index.css';
import type { Preview } from '@storybook/vue3';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
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
  }
};

export default preview;
