import { defineCustomElement } from 'vue'
import { withInstall } from '@puik/utils'

import Input from './src/input.vue'
import InputCe from './src/input.ce.vue'

export const PuikInput = withInstall(Input)
export const PuikInputCe = defineCustomElement(withInstall(InputCe))

if (!customElements.get('puik-input-ce')) {
  customElements.define('puik-input-ce', PuikInputCe)
}

export * from './src/input'

export default PuikInput
