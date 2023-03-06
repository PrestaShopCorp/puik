import { withInstall } from '@puik/utils'

import Tooltip from './src/tooltip.vue'

export const PuikTooltip = withInstall({ ...Tooltip, name: 'PuikTooltip' })
export default PuikTooltip

export * from './src/tooltip'
