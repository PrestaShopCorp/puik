import { defineCustomElement } from 'vue'
import { withInstall } from '@puik/utils'

import Button from './src/button.vue'

export const PuikButton = withInstall(Button)
export const PuikButtonCe = defineCustomElement(PuikButton)

if (!customElements.get('puik-button-ce')) {
  customElements.define('puik-button-ce', PuikButtonCe)
}

export * from './src/button'

export default PuikButton
