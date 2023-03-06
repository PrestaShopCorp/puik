import { withInstall } from '@puik/utils'

import Switch from './src/switch.vue'

export const PuikSwitch = withInstall({ ...Switch, name: 'PuikSwitch' })
export default PuikSwitch

export * from './src/switch'
