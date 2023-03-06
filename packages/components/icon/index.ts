import { withInstall } from '@puik/utils'

import Icon from './src/icon.vue'

export const PuikIcon = withInstall({ ...Icon, name: 'PuikIcon' })
export default PuikIcon

export * from './src/icon'
