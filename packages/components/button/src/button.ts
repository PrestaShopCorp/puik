import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
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
]

export const buttonSizes = ['sm', 'md', 'lg']

export const buttonProps = buildProps({
  variant: {
    type: String,
    values: buttonVariants,
    required: false,
    default: 'primary',
  },
  size: {
    type: String,
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
})

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export type ButtonInstance = InstanceType<typeof Button>
