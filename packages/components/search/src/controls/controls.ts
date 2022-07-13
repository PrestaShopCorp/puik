import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'

export const controlsProps = buildProps({
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
} as const)

export type ControlsProps = ExtractPropTypes<typeof controlsProps>

export const controlsEmits = ['increase', 'decrease']
export type ControlsEmits = typeof controlsEmits
