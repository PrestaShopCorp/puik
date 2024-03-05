import type Snackbar from './snackbar.vue';

export enum PuikSnackbarVariants {
  Default = 'default',
  Danger = 'danger',
  Success = 'success',
}

export enum PuikSnackbarSwipeAnimations {
  Right = 'slide-right',
  Left = 'slide-left',
  Up = 'slide-up',
  Down = 'slide-down',
}
export interface SnackbarProps {
  open?: boolean
  title?: string
  description: string
  duration?: number
  variant?: `${PuikSnackbarVariants}`
  swipeAnimation?: `${PuikSnackbarSwipeAnimations}`
  hasCloseButton?: boolean
}

export type SnackbarEmits = {
  'update:open': [value: boolean]
};

export type SnackbarInstance = InstanceType<typeof Snackbar>;
