import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type Card from './card.vue'

export const cardVariants = ['highlight', 'blue', 'purple', 'amber', 'default']

export const cardProps = buildProps({
  variant: {
    type: String,
    required: false,
    values: cardVariants,
    default: 'default',
  },
} as const)

export type CardProps = ExtractPropTypes<typeof cardProps>

export type CardInstance = InstanceType<typeof Card>
