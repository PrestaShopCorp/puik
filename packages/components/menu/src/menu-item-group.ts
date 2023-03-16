import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type MenuItemGroup from './menu-item-group.vue'

export const menuItemGroupProps = buildProps({
  title: {
    type: String,
    required: true,
  },
} as const)

export type MenuItemGroupProps = ExtractPropTypes<typeof menuItemGroupProps>

export type MenuItemGroupInstance = InstanceType<typeof MenuItemGroup>
