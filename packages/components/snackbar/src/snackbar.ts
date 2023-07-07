import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Snackbar from './snackbar.vue'

export const snackbarVariants = ['default', 'danger'] as const
export type PuikSnackbarVariant = (typeof snackbarVariants)[number]

export interface SnackbarAction {
  label: string
  callback: () => void
}

export interface PuikSnackbarOptions {
  text: string
  variant?: PuikSnackbarVariant
  action?: SnackbarAction
  duration?: number
  offset?: number
  onClose?: () => void
}

export const snackbarProps = buildProps({
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
    type: Object as PropType<SnackbarAction>,
    required: false,
    default: undefined,
  },
  variant: {
    type: String as PropType<PuikSnackbarVariant>,
    required: false,
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
    default: undefined,
  },
} as const)

export const snackbarEmits = {
  destroy: () => true,
}
export type SnackbarProps = ExtractPropTypes<typeof snackbarProps>

export type SnackbarEmits = typeof snackbarEmits

export type SnackbarInstance = InstanceType<typeof Snackbar>
