import type SnackbarProvider from './snackbar-provider.vue';

export enum PuikSnackbarSwipeDirections {
  Right = 'right',
  Left = 'left',
  Up = 'up',
  Down = 'down',
}

export enum PuikSnackbarPositionsX {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}
export enum PuikSnackbarPositionsY {
  Up = 'up',
  Down = 'down',
}

export interface SnackbarProviderProps {
  duration?: number
  label?: string
  swipeDirection?: `${PuikSnackbarSwipeDirections}`
  swipeThreshold?: number
  positionX?: `${PuikSnackbarPositionsX}`
  positionY?: `${PuikSnackbarPositionsY}`
}

export type SnackbarProviderInstance = InstanceType<typeof SnackbarProvider>;
