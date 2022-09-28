import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type Tooltip from './tooltip.vue'

export enum TooltipPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
  LEFT = 'left',
  RIGHT = 'right',
}

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
    values: TooltipPosition,
    required: false,
    default: TooltipPosition.TOP,
  },
} as const)

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>

export type TooltipInstance = InstanceType<typeof Tooltip>
