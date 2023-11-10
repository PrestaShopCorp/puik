import { buildProps } from '@prestashopcorp/puik-utils'
import type { ExtractPropTypes } from 'vue'
import type TabNavigationPanel from './tab-navigation-panel.vue'

export const tabNavigationPanelProps = buildProps({
  position: {
    type: Number,
    required: true,
  },
} as const)

export type TabNavigationPanelProps = ExtractPropTypes<
  typeof tabNavigationPanelProps
>

export type TabNavigationPanelInstance = InstanceType<typeof TabNavigationPanel>
