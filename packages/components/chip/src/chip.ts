import type { PuikTooltipPositions } from '@prestashopcorp/puik-components';
import type Chip from './chip.vue';

export enum PuikChipSizeVariants {
  Default = 'default',
  Large = 'large',
}

export interface ChipProps {
  id: string
  content: string
  size?: `${PuikChipSizeVariants}`
  icon?: string
  disabled?: boolean
  tooltipPosition?: `${PuikTooltipPositions}`
}

export type ChipInstance = InstanceType<typeof Chip>;
