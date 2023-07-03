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
/**
 * @deprecated Use `menuAligns` instead
 */
export const menuAlignValues = Object.values(MenuAlignEnum) as string[]

/**
 * @deprecated Replace with string value
 */
export enum MenuPositionEnum {
  TOP = 'top',
  BOTTOM = 'bottom',
}
/**
 * @deprecated Use `menuPositions` instead
 */
export const menuPositionValues = Object.values(MenuPositionEnum) as string[]

export const menuAligns = ['left', 'right'] as const
export type PuikMenuAlign = (typeof menuAligns)[number]

export const menuPositions = ['top', 'bottom'] as const
export type PuikMenuPosition = (typeof menuPositions)[number]

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
    type: String as PropType<PuikMenuAlign>,
    required: false,
    default: 'left',
  },
  position: {
    type: String as PropType<PuikMenuPosition>,
    required: false,
    default: 'bottom',
  },
} as const)

export type MenuProps = ExtractPropTypes<typeof menuProps>

export type MenuInstance = InstanceType<typeof Menu>
