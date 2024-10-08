import '@prestashopcorp/puik-components/alert/style/css';
import type Alert from './alert.vue';
import { PuikAriaLive } from '@prestashopcorp/puik-components/base/src/common';

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
  buttonWrapLabel?: boolean
  linkLabel?: string
  ariaLive?: `${PuikAriaLive}`
  dataTest?: string
}

export type AlertEmits = {
  click: [event: Event]
  close: [event: Event]
  clickLink: [event: Event]
};

export type AlertInstance = InstanceType<typeof Alert>;
