import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type SpinnerLoader from './spinner-loader.vue'

export const spinnerSizes = ['sm', 'md', 'lg']

export const spinnerLoaderProps = buildProps({
  text: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    required: false,
    default: 'md',
  },
} as const)

export type SpinnerLoaderProps = ExtractPropTypes<typeof spinnerLoaderProps>

export type SpinnerLoaderInstance = InstanceType<typeof SpinnerLoader>
