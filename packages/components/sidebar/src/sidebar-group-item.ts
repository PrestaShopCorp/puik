import '@prestashopcorp/puik-components/sidebar-group-item/style/css';
import type SidebarGroupItem from './sidebar-group-item.vue';

export interface SidebarGroupItemsProps {
  title: string
  icon: string
  name?: string
  active?: boolean
  dataTest?: string
}

export type SidebarGroupItemInstance = InstanceType<typeof SidebarGroupItem>;
