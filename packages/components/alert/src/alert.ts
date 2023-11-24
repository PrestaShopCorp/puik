import type Alert from './alert.vue';

export enum PuikAlertVariants {
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
  Info = 'info',
}

export const ICONS = {
  success: 'check_circle',
  warning: 'warning',
  danger: 'error',
  info: 'info'
};

export interface AlertProps {
  title?: string
  description?: string
  variant?: `${PuikAlertVariants}`
  disableBorders?: boolean
  isClosable?: boolean
  buttonLabel?: string
  ariaLive?: 'polite' | 'assertive'
  dataTest?: string
}

export type AlertEmits = {
  click: [event: Event]
  close: [event: Event]
};

export type AlertInstance = InstanceType<typeof Alert>;
