import { withInstall } from '@puik/utils'

import TabNavigation from './src/tab-navigation.vue'
import TabNavigationItem from './src/tab-navigation-item.vue'

export const PuikTabNavigation = withInstall(TabNavigation)
export const PuikTabNavigationItem = withInstall(TabNavigationItem)

export default PuikTabNavigation

export * from './src/tab-navigation'
export * from './src/tab-navigation-item'
