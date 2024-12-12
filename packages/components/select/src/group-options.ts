import '@prestashopcorp/puik-components/group-options/style/css';
import type GroupOptions from './group-options.vue';

export interface GroupOptionsProps {
  zIndex?: number
  dataTest?: string
}

export type GroupOptionsInstance = InstanceType<typeof GroupOptions>;
