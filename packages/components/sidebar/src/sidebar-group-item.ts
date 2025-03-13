import '../../sidebar-group-item/style';
import type SidebarGroupItem from './sidebar-group-item.vue';

export interface SidebarGroupItemsProps {
  title: string
  icon: string
  name?: string
  active?: boolean
  dataTest?: string
}

export type SidebarGroupItemInstance = InstanceType<typeof SidebarGroupItem>;
