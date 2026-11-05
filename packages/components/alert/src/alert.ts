import type { RouteLocationRaw } from 'vue-router';
import type Alert from './alert.vue';
import { PuikAriaLive } from '@prestashopcorp/puik-components/base/src/common';
import type { PuikLinkTargetVariants } from '@prestashopcorp/puik-components/link';

export enum PuikAlertVariants {
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
  Info = 'info'
}

export const ICONS = {
  success: 'check_circle',
  warning: 'warning',
  danger: 'error',
  info: 'info'
};

export const DEFAULT_CLOSE_ARIA_LABEL = 'Close';

export interface AlertProps {
  title?: string
  description?: string
  variant?: `${PuikAlertVariants}`
  isClosable?: boolean
  disableBorders?: boolean
  disableBackground?: boolean
  buttonLabel?: string
  linkLabel?: string
  buttonWrapLabel?: boolean
  leftIconBtn?: string
  rightIconBtn?: string
  leftIconLink?: string
  rightIconLink?: string
  internalLink?: string
  externalLink?: string
  inlineLinkLabel?: string
  internalInlineLink?: RouteLocationRaw
  externalInlineLink?: string
  inlineLinkTarget?: `${PuikLinkTargetVariants}`
  ariaLive?: `${PuikAriaLive}`
  ariaLabelBtn?: string
  ariaLabelLink?: string
  ariaLabelInlineLink?: string
  ariaLabelClose?: string
  dataTest?: string
}

export type AlertEmits = {
  click: [event: Event]
  clickLink: [event: Event]
  clickInlineLink: [event: Event]
  close: [event: Event]
};

export type AlertInstance = InstanceType<typeof Alert>;
