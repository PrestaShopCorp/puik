import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type TabNavigation from './tab-navigation.vue'

export const tabNavigationProps = buildProps({} as const)

export type TabNavigationProps = ExtractPropTypes<typeof tabNavigationProps>

export type TabNavigationInstance = InstanceType<typeof TabNavigation>
