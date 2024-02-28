import type Snackbar from './snackbar.vue';

export enum PuikSnackbarVariants {
  Default = 'default',
  Danger = 'danger',
  Success = 'success',
}
export interface SnackbarProps {
  id?: string
  open?: boolean
  title?: string
  description: string
  variant?: `${PuikSnackbarVariants}`
  duration?: number
  offset?: number
  hasCloseButton?: boolean
}

export type SnackbarEmits = {
  'update:open': [value: boolean]
};

export type SnackbarInstance = InstanceType<typeof Snackbar>;
