import { buildProps } from '@prestashopcorp/puik-utils'
import type { ExtractPropTypes } from 'vue'
import type Alert from './alert.vue'

export const alertVariants = ['success', 'warning', 'danger', 'info']

export const ICONS = {
  success: 'check_circle',
  warning: 'warning',
  danger: 'error',
  info: 'info',
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
    values: alertVariants,
    default: 'success',
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
    values: ['polite', 'assertive'],
    required: false,
    default: 'polite',
  },
} as const)

export type AlertProps = ExtractPropTypes<typeof alertProps>

export const alertEmits = {
  click: (event: Event) => event instanceof Event,
}

export type AlertEmits = typeof alertEmits

export type AlertInstance = InstanceType<typeof Alert>
