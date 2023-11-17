import type Icon from './icon.vue';

export interface IconProps {
  icon: string
  nodeType?: string
  fontSize?: string | number
  color?: string
}

export type IconInstance = InstanceType<typeof Icon>;
