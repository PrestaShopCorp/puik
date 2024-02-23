import type SnackbarProvider from './snackbar-provider.vue';

export enum PuikSnackbarDirections {
  Right = 'right',
  Left = 'left',
  Up = 'up',
  Down = 'down',
}

export interface SnackbarProviderProps {
  duration?: number
  label?: string
  swipeDirection?: `${PuikSnackbarDirections}`
  swipeThreshold?: number
}

export type SnackbarProviderInstance = InstanceType<typeof SnackbarProvider>;
