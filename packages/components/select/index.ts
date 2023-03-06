import { withInstall, withNoopInstall } from '@puik/utils'

import Select from './src/select.vue'
import Option from './src/option.vue'

export const PuikSelect = withInstall(
  { ...Select, name: 'PuikSelect' },
  { Option: { ...Option, name: 'PuikOption' } }
)
export default PuikSelect

export const PuikOption = withNoopInstall(Option)

export * from './src/select'
export * from './src/option'
