import { defineCustomElement } from 'vue'
import { withInstall } from '@puik/utils'

import ButtonGroup from './src/button-group.vue'

export const PuikButtonGroup = withInstall(ButtonGroup)
export const PuikButtonGroupCe = defineCustomElement(PuikButtonGroup)

if (!customElements.get('puik-button-group-ce')) {
  customElements.define('puik-button-group-ce', PuikButtonGroupCe)
}

export * from './src/button-group'

export default PuikButtonGroup
