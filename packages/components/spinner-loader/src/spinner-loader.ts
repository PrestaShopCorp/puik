import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type SpinnerLoader from './spinner-loader.vue'

export const spinnerSizes = ['sm', 'md', 'lg']
// TODO: check si c'est correct
export const spinnerVariants = ['light', 'dark']

export const spinnerLoaderProps = buildProps({
  size: {
    type: String,
    required: false,
    values: spinnerSizes,
    default: 'md',
  },
  variant: {
    type: String,
    required: false,
    values: spinnerVariants,
    default: 'dark',
  },
  text: {
    type: String,
    required: false,
    default: undefined,
  },
  textRight: {
    type: String,
    required: false,
    default: undefined,
  },
} as const)

export type SpinnerLoaderProps = ExtractPropTypes<typeof spinnerLoaderProps>

export type SpinnerLoaderInstance = InstanceType<typeof SpinnerLoader>
