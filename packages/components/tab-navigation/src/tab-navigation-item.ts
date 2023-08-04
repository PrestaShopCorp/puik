import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type TabNavigationItem from './tab-navigation-item.vue'

export const tabNavigationItemProps = buildProps({} as const)

export type TabNavigationItemProps = ExtractPropTypes<
  typeof tabNavigationItemProps
>

export type TabNavigationItemInstance = InstanceType<typeof TabNavigationItem>
