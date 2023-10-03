import { createApp } from 'vue'
// import { vCustomModelDirective } from '@puik/utils'
import App from './App.vue'
// import type { DirectiveBinding } from 'vue'
import '@puik/theme/src/index.scss'
import './assets/css/style.css'

const app = createApp(App)
// app.directive('custom-model', {
//   mounted(el: HTMLInputElement, binding: DirectiveBinding) {
//     el.addEventListener('input', (event) => {
//       if (event.target) {
//         binding.instance?.$emit(
//           binding.arg!,
//           (event.target as HTMLInputElement).value
//         )
//       }
//     })
//   },
//   beforeUnmount(el: HTMLInputElement) {
//     el.removeEventListener('input', () => {})
//   },
// })

app.mount('#app')
