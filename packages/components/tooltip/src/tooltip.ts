import { buildProps } from '@puik/utils'
import type { Placement } from '@popperjs/core'
import type { ExtractPropTypes } from 'vue'
import type Tooltip from './tooltip.vue'

export const tooltipPosition: Placement[] = ['top', 'bottom', 'left', 'right']

export const tooltipProps = buildProps({
  title: {
    type: String,
    required: false,
    default: undefined,
  },
  description: {
    type: String,
    required: false,
    default: undefined,
  },
  position: {
    type: String,
    values: tooltipPosition,
    required: false,
    default: 'top',
  },
  isDisabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  zindex: {
    type: Number,
    required: false,
    default: 1000,
  },
} as const)

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>

export type TooltipInstance = InstanceType<typeof Tooltip>
