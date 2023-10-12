import { defineCustomElement } from 'vue'
import { withInstall } from '@puik/utils'

import ButtonGroup from './src/button-group.vue'

export const PuikButtonGroup = withInstall(ButtonGroup)
export const PuikButtonGroupCe = defineCustomElement(PuikButtonGroup)

export * from './src/button-group'

export default PuikButtonGroup
