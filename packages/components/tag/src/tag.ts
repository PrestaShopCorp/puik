import type { PuikTooltipPositions } from '@prestashopcorp/puik-components'
import type Tag from './tag.vue'

export enum PuikTagVariants {
  Neutral = 'neutral',
  Blue = 'blue',
  Yellow = 'yellow',
  Green = 'green',
  Purple = 'purple',
}

export enum PuikTagSizes {
  Default = 'default',
  Small = 'small',
}

export interface TagProps {
  id: string
  content: string
  variant: `${PuikTagVariants}`
  size: `${PuikTagSizes}`
  icon: string
  disabled: boolean
  tooltipPosition: `${PuikTooltipPositions}`
}

export type TagInstance = InstanceType<typeof Tag>
