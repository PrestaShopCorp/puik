import { defineCustomElement } from 'vue'
import { withInstall } from '@puik/utils'

import Icon from './src/icon.vue'
import IconCe from './src/icon.ce.vue'

export const PuikIcon = withInstall(Icon)
export const PuikIconCe = defineCustomElement(withInstall(IconCe))

if (!customElements.get('puik-icon-ce')) {
  customElements.define('puik-icon-ce', PuikIconCe)
}

export * from './src/icon'

export default PuikIcon
