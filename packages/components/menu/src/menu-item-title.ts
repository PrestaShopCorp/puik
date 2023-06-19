import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type MenuItemTitle from './menu-item-title.vue'

export const menuItemTitleProps = buildProps({} as const)

export type MenuItemTitleProps = ExtractPropTypes<typeof menuItemTitleProps>

export type MenuItemTitleInstance = InstanceType<typeof MenuItemTitle>
