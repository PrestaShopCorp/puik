import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type PaginationLoader from './pagination-loader.vue'

export const paginationLoaderProps = buildProps({
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
  label: {
    type: String,
    required: true,
  },
  loaderButtonLabel: {
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

export type PaginationProps = ExtractPropTypes<typeof paginationLoaderProps>

export type PaginationInstance = InstanceType<typeof PaginationLoader>
