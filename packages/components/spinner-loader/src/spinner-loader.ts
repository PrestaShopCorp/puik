import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type SpinnerLoader from './spinner-loader.vue'

export const spinnerSizes = ['sm', 'md', 'lg']
export const spinnerColors = ['primary', 'reverse']
export const spinnerPosition = ['bottom', 'right']

export const spinnerLoaderProps = buildProps({
  size: {
    type: String,
    required: false,
    values: spinnerSizes,
    default: 'md',
  },
  color: {
    type: String,
    required: false,
    values: spinnerColors,
    default: 'dark',
  },
  label: {
    type: String,
    required: false,
    default: undefined,
  },
  position: {
    type: String,
    values: spinnerPosition,
    required: false,
    default: 'bottom',
  },
} as const)

export type SpinnerLoaderProps = ExtractPropTypes<typeof spinnerLoaderProps>

export type SpinnerLoaderInstance = InstanceType<typeof SpinnerLoader>
