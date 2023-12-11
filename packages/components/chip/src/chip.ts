import { buildProps } from '@puik/utils'
import type { PuikTooltipPosition } from '@puik/components'
import type { ExtractPropTypes, PropType } from 'vue'
import type Chip from './chip.vue'

export const chipSizeVariants = ['default', 'small'] as const

export type PuikChipSizeVariant = (typeof chipSizeVariants)[number]

export const chipProps = buildProps({
  id: {
    type: String,
    required: true,
    default: undefined,
  },
  content: {
    type: String,
    required: true,
    default: undefined,
  },
  size: {
    type: String as PropType<PuikChipSizeVariant>,
    required: false,
    default: 'default',
  },
  icon: {
    type: String,
    default: '',
    required: false,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  tooltipPosition: {
    type: String as PropType<PuikTooltipPosition>,
    Required: false,
    default: 'bottom',
  },
} as const)

export type ChipProps = ExtractPropTypes<typeof chipProps>

export type ChipInstance = InstanceType<typeof Chip>
