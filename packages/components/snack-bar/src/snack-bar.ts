import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type SnackBar from './snack-bar.vue'

export const snackBarVariants = ['default', 'danger']

export const snackBarProps = buildProps({
  text: {
    type: String,
    required: false,
    default: undefined,
  },
  action: {
    type: String,
    required: false,
    default: undefined,
  },
  variant: {
    type: String,
    values: snackBarVariants,
    default: 'default',
  },
} as const)
export const snackBarEmits = {
  close: (event: Event) => event instanceof Event,
  actionClick: (event: Event) => event instanceof Event,
}
export type SnackBarProps = ExtractPropTypes<typeof snackBarProps>

export type SnackBarInstance = InstanceType<typeof SnackBar>
