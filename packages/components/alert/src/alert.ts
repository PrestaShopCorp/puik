import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type Alert from './alert.vue'

export enum AlertVariants {
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
  INFO = 'info',
}

export const ICONS = {
  [AlertVariants.SUCCESS]: 'check_circle',
  [AlertVariants.WARNING]: 'warning',
  [AlertVariants.DANGER]: 'error',
  [AlertVariants.INFO]: 'info',
}

export enum AlertAriaLive {
  POLITE = 'polite',
  ASSERTIVE = 'assertive',
}

export const alertProps = buildProps({
  title: {
    type: String,
    required: false,
    default: undefined,
  },
  description: {
    type: String,
    required: false,
    default: undefined,
  },
  variant: {
    type: String,
    values: AlertVariants,
    default: AlertVariants.SUCCESS,
  },
  disableBorders: {
    type: Boolean,
    default: false,
  },
  buttonLabel: {
    type: String,
    required: false,
    default: undefined,
  },
  ariaLive: {
    type: String,
    values: AlertAriaLive,
    required: false,
    default: AlertAriaLive.POLITE,
  },
} as const)

export type AlertProps = ExtractPropTypes<typeof alertProps>

export const alertEmits = {
  click: (event: Event) => event instanceof Event,
}

export type AlertEmits = typeof alertEmits

export type AlertInstance = InstanceType<typeof Alert>
