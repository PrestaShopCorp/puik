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
  isClosable?: boolean
  disableBorders?: boolean
  buttonLabel?: string
  linkLabel?: string
  buttonWrapLabel?: boolean
  leftIconBtn?: string
  rightIconBtn?: string
  leftIconLink?: string
  rightIconLink?: string
  internalLink?: string
  externalLink?: string
  ariaLive?: `${PuikAriaLive}`
  ariaLabelBtn?: string
  ariaLabelLink?: string
  dataTest?: string
}

export type AlertEmits = {
  click: [event: Event]
  clickLink: [event: Event]
  close: [event: Event]
};

export type AlertInstance = InstanceType<typeof Alert>;
