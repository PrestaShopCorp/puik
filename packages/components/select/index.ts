import { withInstall, withNoopInstall } from '@prestashopcorp/puik-utils'

import Select from './src/select.vue'
import Option from './src/option.vue'

export const PuikSelect = withInstall(Select, { Option })
export default PuikSelect

export const PuikOption = withNoopInstall(Option)

export * from './src/select'
export * from './src/option'
