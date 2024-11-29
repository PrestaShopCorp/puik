import '@prestashopcorp/puik-components/group-options/style/css';
import type GroupOptions from './group-options.vue';

export interface GroupOptionsProps {
  open?: boolean
  zIndex?: number
  dataTest?: string
}

export type GroupOptionsInstance = InstanceType<typeof GroupOptions>;
