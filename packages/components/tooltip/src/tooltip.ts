import '@prestashopcorp/puik-components/tooltip/style/css';
import type Tooltip from './tooltip.vue';

export enum PuikTooltipPositions {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
}

export interface TooltipProps {
  heading?: string
  description?: string
  position?: `${PuikTooltipPositions}`
  isDisabled?: boolean
  maxWidth?: string
  zindex?: number
  disappearDelay?: number
  dataTest?: string
}

export type TooltipInstance = InstanceType<typeof Tooltip>;
