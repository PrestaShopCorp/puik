import { withInstall } from '@puik/utils'

import Alert from './src/alert.vue'

export const PuikAlert = withInstall({ ...Alert, name: 'PuikAlert' })
export default PuikAlert

export * from './src/alert'
