import { withInstall } from '@puik/utils'

import Table from './src/table.vue'
import TableSearchInput from './src/table-search-input.vue'
import TableSearchBar from './src/table-search-bar.vue'

export const PuikTable = withInstall(Table)
export const PuikTableSearchBar = withInstall(TableSearchBar)
export const PuikTableSearchInput = withInstall(TableSearchInput)

export default PuikTable

export * from './src/table'
export * from './src/table-search-bar'
export * from './src/table-search-input'
