import { withInstall } from '@puik/utils'

import TabNavigation from './src/tab-navigation.vue'
import TabNavigationGroupTitles from './src/tab-navigation-group-titles.vue'
import TabNavigationGroupPanels from './src/tab-navigation-group-panels.vue'
import TabNavigationTitle from './src/tab-navigation-title.vue'
import TabNavigationPanel from './src/tab-navigation-panel.vue'

export const PuikTabNavigation = withInstall(TabNavigation)
export const PuikTabNavigationGroupTitles = withInstall(
  TabNavigationGroupTitles
)
export const PuikTabNavigationGroupPanels = withInstall(
  TabNavigationGroupPanels
)
export const PuikTabNavigationTitle = withInstall(TabNavigationTitle)
export const PuikTabNavigationPanel = withInstall(TabNavigationPanel)

export default PuikTabNavigation

export * from './src/tab-navigation'
export * from './src/tab-navigation-group-titles'
export * from './src/tab-navigation-group-panels'
export * from './src/tab-navigation-title'
export * from './src/tab-navigation-panel'
