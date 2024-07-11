import '@prestashopcorp/puik-components/sidebar-title/style/css';
import type SidebarTitle from './sidebar-title.vue';

export interface SidebarTitleProps {
  tag?: string
  dataTest?: string
}

export type SidebarTitleInstance = InstanceType<typeof SidebarTitle>;
