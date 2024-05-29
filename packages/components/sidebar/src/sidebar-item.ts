import type { RouteLocationRaw } from 'vue-router';
import type SidebarItem from './sidebar-item.vue';

export interface SidebarItemProps {
  title: string
  href?: string
  to?: RouteLocationRaw
  icon?: string
  active?: boolean
  dataTest?: string
}

export type SidebarItemInstance = InstanceType<typeof SidebarItem>;
