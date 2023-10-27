import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type MenuItemTitle from './menu-item-title.vue'

export const menuItemTitleProps = buildProps({
  titleDataTest: {
    type: String,
    required: false,
    default: undefined,
  },
} as const)

export type MenuItemTitleProps = ExtractPropTypes<typeof menuItemTitleProps>

export type MenuItemTitleInstance = InstanceType<typeof MenuItemTitle>
