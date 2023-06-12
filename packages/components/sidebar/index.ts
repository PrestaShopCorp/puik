import { withInstall } from '@puik/utils'

import Sidebar from './src/sidebar.vue'
import SidebarGroupItem from './src/sidebar-group-item.vue'
import SidebarItem from './src/sidebar-item.vue'
import SidebarTitle from './src/sidebar-title.vue'

export const PuikSidebar = withInstall(Sidebar)
export const PuikSidebarGroupItem = withInstall(SidebarGroupItem)
export const PuikSidebarItem = withInstall(SidebarItem)
export const PuikSidebarTitle = withInstall(SidebarTitle)

export default PuikSidebar

export * from './src/sidebar'
export * from './src/sidebar-item'
export * from './src/sidebar-group-item'
export * from './src/sidebar-title'
