import { withInstall } from '@puik/utils'

import Radio from './src/radio.vue'

export const PuikRadio = withInstall({ ...Radio, name: 'PuikRadio' })
export default PuikRadio

export * from './src/radio'
