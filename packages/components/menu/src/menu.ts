import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Menu from './menu.vue'

export enum MenuAlignEnum {
  LEFT = 'left',
  RIGHT = 'right',
}
export const menuAlignValues = Object.values(MenuAlignEnum) as string[]

export enum MenuPositionEnum {
  TOP = 'top',
  BOTTOM = 'bottom',
}
export const menuPositionValues = Object.values(MenuPositionEnum) as string[]

export const menuProps = buildProps({
  maxHeight: {
    type: String,
    required: false,
    default: 'none',
  },
  align: {
    type: String as PropType<MenuAlignEnum>,
    required: false,
    values: menuAlignValues,
    default: MenuAlignEnum.LEFT,
  },
  position: {
    type: String as PropType<MenuPositionEnum>,
    required: false,
    values: menuPositionValues,
    default: MenuPositionEnum.BOTTOM,
  },
} as const)

export type MenuProps = ExtractPropTypes<typeof menuProps>

export type MenuInstance = InstanceType<typeof Menu>
