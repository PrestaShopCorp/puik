import { top, bottom, left, right } from '@popperjs/core'
import { buildProps } from '@puik/utils'
import type { BasePlacement } from '@popperjs/core'
import type { ExtractPropTypes, PropType } from 'vue'
import type Tooltip from './tooltip.vue'

export const tooltipPosition: BasePlacement[] = [top, bottom, left, right]
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
    type: String as PropType<BasePlacement>,
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

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>

export type TooltipInstance = InstanceType<typeof Tooltip>
