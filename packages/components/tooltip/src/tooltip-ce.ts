import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type TooltipCe from './tooltip.ce.vue'

export const tooltipPositionsCe = ['top', 'bottom', 'left', 'right'] as const
export type PuikTooltipPositionCe = (typeof tooltipPositionsCe)[number]
export const tooltipPropsCe = buildProps({
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
    type: String as PropType<PuikTooltipPositionCe>,
    required: false,
    default: 'top',
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

export type TooltipPropsCe = ExtractPropTypes<typeof tooltipPropsCe>

export type TooltipInstanceCe = InstanceType<typeof TooltipCe>
