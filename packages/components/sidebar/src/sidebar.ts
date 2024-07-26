import '@prestashopcorp/puik-components/sidebar/style/css';
import type { Ref, InjectionKey } from 'vue';
import type Sidebar from './sidebar.vue';

export interface SidebarProps {
  expanded?: boolean
  openAccordion?: string
  mobile?: boolean
}

export type SidebarInstance = InstanceType<typeof Sidebar>;

export type SidebarContext = {
  extended: Ref<boolean>
};

export const sidebarKey: InjectionKey<SidebarContext> = Symbol('sidebar');
export const groupItemKey: InjectionKey<boolean> = Symbol('sidebar-group-item');
