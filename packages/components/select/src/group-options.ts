import '@prestashopcorp/puik-components/group-options/style/css';
import type GroupOptions from './group-options.vue';

export interface GroupOptionsProps {
  open?: boolean
  zIndex?: number
}

export type GroupOptionsInstance = InstanceType<typeof GroupOptions>;
