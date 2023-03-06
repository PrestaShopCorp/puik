import { withInstall } from '@puik/utils'

import Checkbox from './src/checkbox.vue'

export const PuikCheckbox = withInstall({ ...Checkbox, name: 'PuikCheckbox' })
export default PuikCheckbox

export * from './src/checkbox'
