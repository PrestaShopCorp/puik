import { defineCustomElement } from 'vue'
import { withInstall } from '@puik/utils'

import Icon from './src/icon.vue'

export const PuikIcon = withInstall(Icon)
export const PuikIconCe = defineCustomElement(PuikIcon)

export * from './src/icon'

export default PuikIcon
