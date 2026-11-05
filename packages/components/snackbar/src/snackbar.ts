import type Snackbar from './snackbar.vue';
import type { Component } from 'vue';

export enum PuikSnackbarVariants {
  Default = 'default',
  Reverse = 'reverse',
  Warning = 'warning',
  Danger = 'danger',
  Success = 'success',
}

/**
 * Leading icon displayed before the message, per variant.
 * `default` and `reverse` have no leading icon.
 */
export const SNACKBAR_ICONS: Partial<Record<PuikSnackbarVariants, string>> = {
  [PuikSnackbarVariants.Warning]: 'warning',
  [PuikSnackbarVariants.Danger]: 'error',
  [PuikSnackbarVariants.Success]: 'check_circle'
};

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
  onOpenChange?: ((openState: boolean) => void) | undefined
}

export type UseSnackbarProps = Omit<SnackbarProps, 'id' | 'duration'>;

export type SnackbarEmits = {
  'update:open': [value: boolean]
};

export type SnackbarInstance = InstanceType<typeof Snackbar>;
