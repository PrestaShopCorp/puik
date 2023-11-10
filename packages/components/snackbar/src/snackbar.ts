import type Snackbar from './snackbar.vue'

export enum PuikSnackbarVariants {
  Default = 'default',
  Danger = 'danger',
  Success = 'success',
}

export interface SnackbarAction {
  label: string
  callback: () => void
}

export interface PuikSnackbarOptions {
  text: string
  variant?: `${PuikSnackbarVariants}`
  action?: SnackbarAction
  duration?: number
  offset?: number
  hasCloseButton?: boolean
  onClose?: () => void
}

export interface PuikSnackbarProps extends PuikSnackbarOptions {
  id: string
}

export const snackbarEmits = {
  destroy: () => true,
}

export type SnackbarEmits = typeof snackbarEmits

export type SnackbarInstance = InstanceType<typeof Snackbar>
