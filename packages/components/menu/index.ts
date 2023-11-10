import { withInstall } from '@prestashopcorp/puik-utils'

import Menu from './src/menu.vue'
import MenuItem from './src/menu-item.vue'
import MenuItemSeparator from './src/menu-item-separator.vue'
import MenuItemTitle from './src/menu-item-title.vue'

export const PuikMenu = withInstall(Menu)
export const PuikMenuItem = withInstall(MenuItem)
export const PuikMenuItemSeparator = withInstall(MenuItemSeparator)
export const PuikMenuItemTitle = withInstall(MenuItemTitle)
export default PuikMenu

export * from './src/menu'
export * from './src/menu-item'
export * from './src/menu-item-separator'
