import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type TableSearchBar from './table-search-bar.vue'

export const tableSearchBarProps = buildProps({
  expandable: {
    type: Boolean,
    required: false,
    default: false,
  },
  selectable: {
    type: Boolean,
    required: false,
    default: false,
  },
} as const)

export type TableSearchBarProps = ExtractPropTypes<typeof tableSearchBarProps>

export type TableSearchBarInstance = InstanceType<typeof TableSearchBar>
