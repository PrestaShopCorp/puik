import type SidebarGroupItem from './sidebar-group-item.vue'

export interface SidebarGroupItemsProps {
  title: string
  icon: string
  name?: string
  active?: boolean
}

export type SidebarGroupItemInstance = InstanceType<typeof SidebarGroupItem>
