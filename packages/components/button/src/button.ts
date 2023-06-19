import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Button from './button.vue'

export const buttonVariants = [
  'primary',
  'destructive',
  'secondary',
  'tertiary',
  'text',
  'info',
  'success',
  'warning',
  'danger',
] as const

export type ButtonVariantsType = (typeof buttonVariants)[number]

export const buttonSizes = ['sm', 'md', 'lg'] as const
export type ButtonSizesType = (typeof buttonSizes)[number]

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
