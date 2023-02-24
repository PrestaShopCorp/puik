import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type ButtonGroup from './button-group.vue'

export const buttonGroupProps = buildProps({
  selectedIndex: {
    type: Number,
    required: false,
    default: false,
  },
  buttons_list: {
    type: Array,
    required: true,
  },
} as const)

export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>

export type ButtonGroupInstance = InstanceType<typeof ButtonGroup>
