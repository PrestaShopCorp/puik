import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type PaginationMedium from './pagination-medium.vue'

export const paginationMediumProps = buildProps({
  modelValue: {
    type: Number,
    required: false,
    default: 1,
  },
  disabled: {
    type: Boolean,
    required: false,
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
  labelDataTest: {
    type: String,
    required: false,
    default: undefined,
  },
  previousButtonDataTest: {
    type: String,
    required: false,
    default: undefined,
  },
  nextButtonDataTest: {
    type: String,
    required: false,
    default: undefined,
  },
} as const)

export type PaginationProps = ExtractPropTypes<typeof paginationMediumProps>

export type PaginationInstance = InstanceType<typeof PaginationMedium>
