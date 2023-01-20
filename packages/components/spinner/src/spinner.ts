import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type Spinner from './spinner.vue'

export const spinnerVariants = [
  'primary',
  'success',
  'warning',
  'danger',
  'info',
]

export const spinnerSizes = ['small', 'normal', 'big']

export const spinnerProps = buildProps({
  size: {
    type: String,
    required: false,
    values: spinnerSizes,
    default: 'normal',
  },
  variant: {
    type: String,
    required: false,
    values: spinnerVariants,
    default: 'primary',
  },
} as const)

export type SpinnerProps = ExtractPropTypes<typeof spinnerProps>

export type SpinnerInstance = InstanceType<typeof Spinner>
