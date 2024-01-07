import { withInstall } from '@puik/utils'

import Table from './src/table.vue'
import TableSearchInput from './src/table-search-input.vue'

export const PuikTable = withInstall(Table)
export const PuikTableSearchInput = withInstall(TableSearchInput)

export default PuikTable

export * from './src/table'
export * from './src/table-search-input'
