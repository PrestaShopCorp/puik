import { withInstall } from '@puik/utils'

import Label from './src/label.vue'

export const PuikLabel = withInstall({ ...Label, name: 'PuikLabel' })
export default PuikLabel

export * from './src/label'
