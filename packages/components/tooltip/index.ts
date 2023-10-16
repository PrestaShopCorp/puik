import { withInstall } from '@puik/utils'

import Tooltip from './src/tooltip.vue'

export const PuikTooltip = withInstall(Tooltip)
export const PuikTooltipCe = defineCustomElement(PuikTooltip)

export * from './src/tooltip'

export default PuikTooltip
