import { defineCustomElement } from 'vue'
import { withInstall } from '@puik/utils'

import Button from './src/button.vue'

export const PuikButton = withInstall(Button)
export const PuikButtonCe = defineCustomElement(PuikButton)

export * from './src/button'

export default PuikButton
