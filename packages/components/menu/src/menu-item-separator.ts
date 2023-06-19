import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type MenuItemSeparator from './menu-item-separator.vue'

export const menuItemSeparatorProps = buildProps({} as const)

export type MenuItemSeparatorProps = ExtractPropTypes<
  typeof menuItemSeparatorProps
>

export type MenuItemSeparatorInstance = InstanceType<typeof MenuItemSeparator>
