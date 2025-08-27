import type { PuikTooltipPositions } from '@prestashopcorp/puik-components';
import type Tag from './tag.vue';

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
  id?: string
  content: string
  variant?: `${PuikTagVariants}`
  size?: `${PuikTagSizes}`
  icon?: string
  accent?: boolean
  disabled?: boolean
  tooltipPosition?: `${PuikTooltipPositions}`
  dataTest?: string
}

export type TagInstance = InstanceType<typeof Tag>;
