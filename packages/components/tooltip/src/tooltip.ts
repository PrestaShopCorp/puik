import type Tooltip from './tooltip.vue';

export enum PuikTooltipPositions {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
}

export interface TooltipProps {
  title?: string
  description?: string
  position?: `${PuikTooltipPositions}`
  isDisabled?: boolean
  maxWidth?: string
  zindex?: number
  disappearDelay?: number
  dataTest?: string
}

export type TooltipInstance = InstanceType<typeof Tooltip>;
