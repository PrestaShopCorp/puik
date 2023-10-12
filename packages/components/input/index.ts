import { defineCustomElement } from 'vue'
import { withInstall } from '@puik/utils'

import Input from './src/input.vue'

export const PuikInput = withInstall(Input)
export const PuikInputCe = defineCustomElement(PuikInput)

export * from './src/input'

export default PuikInput
