import { buildProps } from '@puik/utils'
import PuikButton from '../../button'
import type { Component, ExtractPropTypes, PropType } from 'vue'
import type Menu from './menu.vue'

export enum MenuAlignEnum {
  left = 'left',
  right = 'right',
}
export const menuAlignValues = Object.values(MenuAlignEnum) as string[]

export enum MenuPositionEnum {
  top = 'top',
  bottom = 'bottom',
}
export const menuPositionValues = Object.values(MenuPositionEnum) as string[]

export const menuProps = buildProps({
  as: {
    type: [Object, String] as PropType<Component | string>,
    required: false,
    default: PuikButton,
  },
  activatorLabel: {
    type: String,
    required: false,
    default: undefined,
  },
  width: {
    type: String,
    required: false,
    default: '300px',
  },
  align: {
    type: String as PropType<MenuAlignEnum>,
    required: false,
    values: menuAlignValues,
    default: MenuAlignEnum.left,
  },
  position: {
    type: String as PropType<MenuPositionEnum>,
    required: false,
    values: menuPositionValues,
    default: MenuPositionEnum.bottom,
  },
} as const)

export type MenuProps = ExtractPropTypes<typeof menuProps>

export type MenuInstance = InstanceType<typeof Menu>
