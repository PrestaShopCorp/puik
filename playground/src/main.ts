import { createApp } from 'vue'
// import modelCustomElement from '@puik/utils/model-custom-element'
import App from './App.vue'
import '@puik/theme/src/index.scss'
import './assets/css/style.css'

// const wm = new WeakMap()
const app = createApp(App)

// app.directive('v-model-ce', (el, binding) => {

// })

app.mount('#app')
