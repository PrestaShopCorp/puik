import type Icon from './icon.vue';

export interface IconProps {
  icon: string
  nodeType?: string
  fontSize?: string | number
  color?: string
  fill?: number
  isDisabled?: boolean
  dataTest?: string
  ariaLabel?: string
}

export type IconInstance = InstanceType<typeof Icon>;
