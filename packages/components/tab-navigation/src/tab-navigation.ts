import { buildProps } from '@prestashopcorp/puik-utils'
import type { ExtractPropTypes, InjectionKey, Ref } from 'vue'
import type TabNavigation from './tab-navigation.vue'

export const tabNavigationProps = buildProps({
  name: {
    type: String,
    required: true,
  },
  defaultPosition: {
    type: Number,
    required: false,
    default: 1,
  },
} as const)

export type TabNavigationProps = ExtractPropTypes<typeof tabNavigationProps>

export type TabNavigationInstance = InstanceType<typeof TabNavigation>

export type currentTabKeyContext = {
  name: Ref<string>
  numberOfTabs: Ref<number>
  currentPosition: Ref<number>
  keyEventDirection: Ref<string | null>
  handleTabClick: (index: number) => void
}

export const currentTabKey: InjectionKey<currentTabKeyContext> =
  Symbol('current-tab')
