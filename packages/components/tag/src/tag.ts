import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Tag from './tag.vue'

export const tagColorsVariants = [
  'neutral',
  'blue',
  'yellow',
  'green',
  'purple',
] as const

export type PuikTagColorVariant = (typeof tagColorsVariants)[number]

export const tagProps = buildProps({
  id: {
    type: String,
    required: true,
    default: '',
  },
  variant: {
    type: String as PropType<PuikTagColorVariant>,
    required: false,
    default: 'neutral',
  },
  icon: {
    type: String,
    default: '',
    required: false,
  },
  closeable: {
    type: Boolean,
    required: false,
    default: true,
  },
  disable: {
    type: Boolean,
    required: false,
    default: false,
  },
} as const)

export type TagProps = ExtractPropTypes<typeof tagProps>

export type TagInstance = InstanceType<typeof Tag>
