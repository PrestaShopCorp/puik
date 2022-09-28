import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type Button from './button.vue'

export enum ButtonVariants {
  PRIMARY = 'primary',
  DESTRUCTIVE = 'destructive',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  TEXT = 'text',
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

export enum ButtonSizes {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
}

export const buttonProps = buildProps({
  variant: {
    type: String,
    values: ButtonVariants,
    required: false,
    default: ButtonVariants.PRIMARY,
  },
  size: {
    type: String,
    values: ButtonSizes,
    required: false,
    default: ButtonSizes.MD,
  },
  fluid: {
    type: Boolean,
    required: false,
    default: false,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  leftIcon: {
    type: String,
    required: false,
    default: '',
  },
  rightIcon: {
    type: String,
    required: false,
    default: '',
  },
  to: {
    type: String,
    required: false,
    default: undefined,
  },
  href: {
    type: String,
    required: false,
    default: undefined,
  },
} as const)

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export type ButtonInstance = InstanceType<typeof Button>
