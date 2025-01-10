import '@prestashopcorp/puik-components/snackbar/style/css';
import type Snackbar from './snackbar.vue';
import type { Component } from 'vue';

export enum PuikSnackbarVariants {
  Default = 'default',
  Danger = 'danger',
  Success = 'success',
}
export enum PuikSnackbarActions {
  Add = 'add-snackbar',
  Update = 'update-snackbar',
  Dismiss = 'dismiss-snackbar',
  Remove = 'remove-snackbar',
}

export type PuikSnackbarDispatchActions =
  | {
    type: PuikSnackbarActions.Add
    snackbar: SnackbarProps
  }
  | {
    type: PuikSnackbarActions.Update
    snackbar: Partial<SnackbarProps>
  }
  | {
    type: PuikSnackbarActions.Dismiss
    snackbarId?: SnackbarProps['id']
  }
  | {
    type: PuikSnackbarActions.Remove
    snackbarId?: SnackbarProps['id']
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
  onOpenChange?: ((value: boolean) => void) | undefined
}

export type SnackbarEmits = {
  'update:open': [value: boolean]
};

export type SnackbarInstance = InstanceType<typeof Snackbar>;
