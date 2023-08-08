import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, InjectionKey, Ref } from 'vue'
import type TabNavigation from './tab-navigation.vue'

export const tabNavigationProps = buildProps({
  defaultPosition: {
    type: Number,
    required: false,
    default: 1,
  },
  vertical: {
    type: Boolean,
    required: false,
    default: false,
  },
} as const)

export type TabNavigationProps = ExtractPropTypes<typeof tabNavigationProps>

export type TabNavigationInstance = InstanceType<typeof TabNavigation>

export type currentTabKeyContext = {
  currentPosition: Ref<number>
  handleTabClick: (index: number) => void
}

export const currentTabKey: InjectionKey<currentTabKeyContext> =
  Symbol('current-tab')
