import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type ButtonGroup from './button-group.vue'
import type { ButtonProps } from '@puik/components'

export type ButtonGroupType = ButtonProps & {
  label: string
}

// ExtractPropTypes<typeof buttonProps>

// export type ButtonGroupType = {
//   label: String,
//   variant: String
// }

export const buttonGroupProps = buildProps({
  selectedIndex: {
    type: Number,
    required: false,
    default: 0,
  },
  size: {
    type: String,
    required: false,
    default: 'md',
  },
  buttonList: {
    type: [] as PropType<ButtonGroupType[]>,
    required: true,
  },
} as const)

export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>

export type ButtonGroupInstance = InstanceType<typeof ButtonGroup>

export const buttonGroupEmits = ['puikButtonGroupClicked']
export type ButtonGroupEmits = typeof buttonGroupEmits
