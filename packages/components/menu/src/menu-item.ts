import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type MenuItem from './menu-item.vue'

export const menuItemProps = buildProps({
  rightIcon: {
    type: String,
    required: false,
    default: undefined,
  },
  leftIcon: {
    type: String,
    required: false,
    default: undefined,
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
  destructive: {
    type: Boolean,
    required: false,
    default: false,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
} as const)

export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>

export type MenuItemInstance = InstanceType<typeof MenuItem>
