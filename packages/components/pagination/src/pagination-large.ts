import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type PaginationLarge from './pagination-large.vue'

export const paginationLargeProps = buildProps({
  modelValue: {
    type: Number,
    required: false,
    default: 1,
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
} as const)

export type PaginationProps = ExtractPropTypes<typeof paginationLargeProps>

export type PaginationInstance = InstanceType<typeof PaginationLarge>
