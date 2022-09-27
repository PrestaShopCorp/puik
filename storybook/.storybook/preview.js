import '../assets/css/index.css'
import '@puik/theme/src/index.scss'
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'transparent',
    values: [
      {
        name: 'transparent',
        value: 'transparent',
      },
      {
        name: 'white',
        value: '#ffffff',
      },
    ],
  },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Docs', ['Introduction', 'VueJs Components', 'Css Components']],
    },
  },
}
