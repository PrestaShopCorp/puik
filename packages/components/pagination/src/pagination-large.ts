import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type PaginationLarge from './pagination-large.vue'

export const paginationLargeProps = buildProps({
  page: {
    type: Number,
    required: true,
  },
  itemsPerPage: {
    type: Number,
    required: true,
  },
  itemsPerPageOptions: {
    type: Array as PropType<number[]>,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  totalItem: {
    type: Number,
    required: true,
  },
  maxPage: {
    type: Number,
    required: true,
  },
  itemCount: {
    type: Number,
    required: false,
    default: 0,
  },
  label: {
    type: String,
    required: false,
    default: undefined,
  },
  dataTest: {
    type: String,
    required: false,
    default: undefined,
  },
} as const)

export type PaginationProps = ExtractPropTypes<typeof paginationLargeProps>

export type PaginationInstance = InstanceType<typeof PaginationLarge>
