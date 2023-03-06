import { withInstall } from '@puik/utils'

import Input from './src/input.vue'

export const PuikInput = withInstall({ ...Input, name: 'PuikInput' })
export default PuikInput

export * from './src/input'
