import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type SnackBar from './snackbar.vue'

export type SnackbarVariants = 'default' | 'danger'

export const snackBarVariants: SnackbarVariants[] = ['default', 'danger']

export interface SnackBarAction {
  label: string
  callback: () => void
}

export interface SnackBarOptions {
  text: string
  variant?: SnackbarVariants
  action?: SnackBarAction
  duration?: number
  offset?: number
  onClose?: () => void
}

export const snackBarProps = buildProps({
  text: {
    type: String,
    required: false,
    default: undefined,
  },
  id: {
    type: String,
    required: false,
  },
  action: {
    type: Object as PropType<SnackBarAction>,
    required: false,
    default: undefined,
  },
  variant: {
    type: String,
    values: snackBarVariants,
    default: 'default',
  },
  duration: {
    type: Number,
    required: false,
    default: 3000,
  },
  offset: {
    type: Number,
    required: false,
    default: 0,
  },
  onClose: {
    type: Function,
    required: false,
  },
} as const)

export const snackBarEmits = {
  destroy: () => true,
}
export type SnackBarProps = ExtractPropTypes<typeof snackBarProps>

export type SnackBarEmits = typeof snackBarEmits

export type SnackBarInstance = InstanceType<typeof SnackBar>
