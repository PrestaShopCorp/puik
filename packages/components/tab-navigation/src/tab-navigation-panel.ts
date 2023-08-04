import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type TabNavigationPanel from './tab-navigation-panel.vue'

export const tabNavigationPanelProps = buildProps({
  selected: {
    type: Boolean,
    required: false,
    default: false,
  },
} as const)

export type TabNavigationPanelProps = ExtractPropTypes<
  typeof tabNavigationPanelProps
>

export type TabNavigationPanelInstance = InstanceType<typeof TabNavigationPanel>
