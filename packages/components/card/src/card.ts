import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Card from './card.vue'

export const cardVariants = [
  'highlight',
  'blue',
  'purple',
  'amber',
  'default',
] as const

export type PuikCardVariants = (typeof cardVariants)[number]

export const cardProps = buildProps({
  variant: {
    type: String as PropType<PuikCardVariants>,
    required: false,
    default: 'default',
  },
} as const)

export type CardProps = ExtractPropTypes<typeof cardProps>

export type CardInstance = InstanceType<typeof Card>
