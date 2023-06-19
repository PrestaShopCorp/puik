import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Menu from './menu.vue'

/**
 * @deprecated Replace with string value
 */
export enum MenuAlignEnum {
  LEFT = 'left',
  RIGHT = 'right',
}
export const menuAlignValues = Object.values(MenuAlignEnum) as string[]

/**
 * @deprecated Replace with string value
 */
export enum MenuPositionEnum {
  TOP = 'top',
  BOTTOM = 'bottom',
}
export const menuPositionValues = Object.values(MenuPositionEnum) as string[]

export const menuAlign = ['left', 'right'] as const
export type MenuAlignType = (typeof menuAlign)[number]

export const menuPosition = ['top', 'bottom'] as const
export type MenuPositionType = (typeof menuPosition)[number]

export const menuProps = buildProps({
  maxHeight: {
    type: String,
    required: false,
    default: 'none',
  },
  width: {
    type: String,
    required: false,
    default: '200px',
  },
  align: {
    type: String as PropType<MenuAlignType>,
    required: false,
    default: 'left',
  },
  position: {
    type: String as PropType<MenuPositionType>,
    required: false,
    default: 'bottom',
  },
} as const)

export type MenuProps = ExtractPropTypes<typeof menuProps>

export type MenuInstance = InstanceType<typeof Menu>
