import { withInstall } from '@puik/utils'

import Card from './src/card.vue'

export const PuikCard = withInstall({ ...Card, name: 'PuikCard' })
export default PuikCard

export * from './src/card'
