import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Table from './table.vue'

export interface PuikTableHeader {
  value: string
  text?: string
  size?: 'sm' | 'md' | 'lg'
  align?: 'left' | 'center' | 'right'
  width?: string
  sortable?: boolean
}

// export type ServerOption = {
//   page: number
//   rowsPerPage: number
//   sortBy?: string | string[]
//   sortType?: PuikTableSortOrder | PuikTableSortOrder[]
// }

export enum PuikTableSortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum PuikTableSortIcon {
  DEFAULT = 'unfold_more',
  ASC = 'expand_more',
  DESC = 'expand_less',
}

export enum PuikTableScrollBarPosistion {
  LEFT = 'left',
  RIGHT = 'right',
  ISSCROLLING = 'isScrolling',
}

export const tableProps = buildProps({
  headers: {
    type: Array as PropType<PuikTableHeader[]>,
    required: true,
  },
  items: {
    type: Array as PropType<any[]>,
    required: false,
    default: () => [],
  },
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
  selection: {
    type: Array as PropType<number[]>,
    required: false,
    default: () => [],
  },
  fullWidth: {
    type: Boolean,
    required: false,
    default: false,
  },
  stickyFirstCol: {
    type: Boolean,
    required: false,
    default: false,
  },
  stickyLastCol: {
    type: Boolean,
    required: false,
    default: false,
  },
} as const)

export type TableProps = ExtractPropTypes<typeof tableProps>

export type TableInstance = InstanceType<typeof Table>
