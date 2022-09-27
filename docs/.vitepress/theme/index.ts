import DefaultTheme from 'vitepress/theme'
import CodeSnippet from './components/CodeSnippet.vue'
import ColorPalette from './components/ColorPalette.vue'
import './styles.css'
export default Object.assign({}, DefaultTheme, {
  enhanceApp({ app }) {
    app.component('CodeSnippet', CodeSnippet)
    app.component('ColorPalette', ColorPalette)
  },
})
