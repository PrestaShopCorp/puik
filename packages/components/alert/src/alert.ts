import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Alert from './alert.vue'

export const alertVariants = ['success', 'warning', 'danger', 'info'] as const

export type PuikAlertVariant = (typeof alertVariants)[number]

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
    type: String as PropType<PuikAlertVariant>,
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
  buttonWrapLabel: {
    type: Boolean,
    required: false,
    default: false,
  },
  isClosable: {
    type: Boolean,
    required: false,
    default: false,
  },
  ariaLive: {
    type: String as PropType<'polite' | 'assertive'>,
    required: false,
    default: 'polite',
  },
  dataTest: {
    type: String,
    required: false,
    default: undefined,
  },
} as const)

export type AlertProps = ExtractPropTypes<typeof alertProps>

export const alertEmits = ['click', 'close']
export type AlertEmits = typeof alertEmits

export type AlertInstance = InstanceType<typeof Alert>
