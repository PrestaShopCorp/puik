import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type TabNavigation from './tab-navigation.vue'

export const tabNavigationProps = buildProps({
  defaultIndex: {
    type: Number,
    required: false,
    default: 0,
  },
  selectedIndex: {
    type: Number,
    required: false,
  },
  vertical: {
    type: Boolean,
    required: false,
    default: false,
  },
  manual: {
    type: Boolean,
    required: false,
    default: false,
  },
} as const)

export type TabNavigationProps = ExtractPropTypes<typeof tabNavigationProps>

export type TabNavigationInstance = InstanceType<typeof TabNavigation>
