import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type PaginationMobile from './pagination-mobile.vue'

export const paginationMobileProps = buildProps({
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
  maxPage: {
    type: Number,
    required: true,
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

export type PaginationProps = ExtractPropTypes<typeof paginationMobileProps>

export type PaginationInstance = InstanceType<typeof PaginationMobile>
