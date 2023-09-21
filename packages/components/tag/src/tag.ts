import { buildProps } from '@puik/utils'
import type { PuikTooltipPosition } from '@puik/components'
import type { ExtractPropTypes, PropType } from 'vue'
import type Tag from './tag.vue'

export const tagColorsVariants = [
  'neutral',
  'blue',
  'yellow',
  'green',
  'purple',
] as const

export const tagSizeVariants = ['default', 'small'] as const

export type PuikTagColorVariant = (typeof tagColorsVariants)[number]
export type PuikTagSizeVariant = (typeof tagSizeVariants)[number]

export const tagProps = buildProps({
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
  variant: {
    type: String,
    required: false,
    default: 'neutral',
  },
  size: {
    type: String,
    required: false,
    default: 'default',
  },
  icon: {
    type: String,
    default: '',
    required: false,
  },
  closeable: {
    type: Boolean,
    required: false,
    default: false,
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

export type TagProps = ExtractPropTypes<typeof tagProps>

export type TagInstance = InstanceType<typeof Tag>
