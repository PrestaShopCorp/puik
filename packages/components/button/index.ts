import { withInstall } from '@puik/utils'

import Button from './src/button.vue'

export const PuikButton = withInstall({ ...Button, name: 'PuikButton' })
export default PuikButton

export * from './src/button'
