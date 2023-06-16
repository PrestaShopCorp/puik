import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Card from './card.vue'

export enum cardVariants {
  HIGHLIGHT = 'highlight',
  BLUE = 'blue',
  PURPLE = 'purple',
  AMBER = 'amber',
  DEFAULT = 'default',
}

export type CardVariantsType = `${cardVariants}`

export const cardProps = buildProps({
  variant: {
    type: String as PropType<CardVariantsType>,
    required: false,
    default: 'default',
  },
} as const)

export type CardProps = ExtractPropTypes<typeof cardProps>

export type CardInstance = InstanceType<typeof Card>
