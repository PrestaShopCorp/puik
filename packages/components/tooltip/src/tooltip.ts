import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Tooltip from './tooltip.vue'

export const tooltipPositions = ['top', 'bottom', 'left', 'right'] as const
export type PuikTooltipPosition = (typeof tooltipPositions)[number]
export const tooltipProps = buildProps({
  title: {
    type: String,
    required: false,
    default: undefined,
  },
  titleDataTest: {
    type: String,
    required: false,
    default: 'tooltip-title',
  },
  description: {
    type: String,
    required: false,
    default: undefined,
  },
  descriptionDataTest: {
    type: String,
    required: false,
    default: 'tooltip-description',
  },
  position: {
    type: String as PropType<PuikTooltipPosition>,
    required: false,
    default: 'bottom',
  },
  isDisabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  maxWidth: {
    type: String,
    required: false,
    default: undefined,
  },
  zindex: {
    type: Number,
    required: false,
    default: 1000,
  },
  disappearDelay: {
    type: Number,
    required: false,
    default: 500,
  },
} as const)

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>

export type TooltipInstance = InstanceType<typeof Tooltip>
