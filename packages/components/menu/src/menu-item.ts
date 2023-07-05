import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type MenuItem from './menu-item.vue'

export const menuItemProps = buildProps({} as const)

export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>

export type MenuItemInstance = InstanceType<typeof MenuItem>
