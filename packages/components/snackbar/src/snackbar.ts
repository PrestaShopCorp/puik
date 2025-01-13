import '@prestashopcorp/puik-components/snackbar/style/css';
import type Snackbar from './snackbar.vue';
import type { Component } from 'vue';

export enum PuikSnackbarVariants {
  Default = 'default',
  Danger = 'danger',
  Success = 'success',
}

export type SnackbarsState = SnackbarProps[];

export enum PuikSnackbarSwipeAnimations {
  Right = 'slide-right',
  Left = 'slide-left',
  Up = 'slide-up',
  Down = 'slide-down',
}
export interface SnackbarProps {
  id?: string
  open?: boolean
  title?: string
  description: string
  duration?: number
  variant?: `${PuikSnackbarVariants}`
  swipeAnimation?: `${PuikSnackbarSwipeAnimations}`
  hasCloseButton?: boolean
  action?: Component
  onOpenChange?: ((value: boolean) => void) | undefined
}

export type UseSnackbarProps = Omit<SnackbarProps, 'id' | 'duration'>;

export type SnackbarEmits = {
  'update:open': [value: boolean]
};

export type SnackbarInstance = InstanceType<typeof Snackbar>;
