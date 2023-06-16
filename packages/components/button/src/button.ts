import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Button from './button.vue'

export enum buttonVariants {
  PRIMARY = 'primary',
  DESTRUCTIVE = 'destructive',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  TEXT = 'text',
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
}

export type ButtonVariantsType = `${buttonVariants}`

export enum buttonSizes {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
}
export type ButtonSizesType = `${buttonSizes}`

export const buttonProps = buildProps({
  variant: {
    type: String as PropType<ButtonVariantsType>,
    required: false,
    default: 'primary',
  },
  size: {
    type: String as PropType<ButtonSizesType>,
    required: false,
    default: 'md',
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
  value: {
    type: [String, Number, Object, Array],
    required: false,
    default: undefined,
  },
} as const)

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export type ButtonInstance = InstanceType<typeof Button>
