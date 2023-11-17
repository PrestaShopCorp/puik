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
  buttonLabel?: string
  ariaLive?: 'polite' | 'assertive'
}

export type AlertEmits = {
  click: [event: Event]
};

export type AlertInstance = InstanceType<typeof Alert>;
