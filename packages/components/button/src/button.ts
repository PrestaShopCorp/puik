import { buildProps } from '@puik/utils'
import type { RouteLocationRaw } from 'vue-router'
import type { ExtractPropTypes, PropType } from 'vue'
import type Button from './button.vue'

export const buttonVariants = [
  'primary',
  'primary-reverse',
  'destructive',
  'secondary',
  'secondary-reverse',
  'tertiary',
  'text',
  'text-reverse',
  'info',
  'success',
  'warning',
  'danger',
] as const
export type PuikButtonVariant = (typeof buttonVariants)[number]

export const buttonSizes = ['sm', 'md', 'lg'] as const
export type PuikButtonSize = (typeof buttonSizes)[number]

export const buttonProps = buildProps({
  variant: {
    type: String as PropType<PuikButtonVariant>,
    required: false,
    default: 'primary',
  },
  size: {
    type: String as PropType<PuikButtonSize>,
    required: false,
    default: 'md',
  },
  fluid: {
    type: Boolean,
    required: false,
    default: false,
  },
  wrapLabel: {
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
    type: [Object, String] as PropType<RouteLocationRaw>,
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
  dataTest: {
    type: String,
    required: false,
    default: undefined,
  },
} as const)

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export type ButtonInstance = InstanceType<typeof Button>
