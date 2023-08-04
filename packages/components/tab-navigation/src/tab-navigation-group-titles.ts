import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type TabNavigationGroupTitles from './tab-navigation-group-titles.vue'

export const tabNavigationGroupTitlesProps = buildProps({
  selectedIndex: {
    type: Number,
    required: false,
    default: 0,
  },
} as const)

export type TabNavigationGroupTitlesProps = ExtractPropTypes<
  typeof tabNavigationGroupTitlesProps
>

export type TabNavigationGroupTitlesInstance = InstanceType<
  typeof TabNavigationGroupTitles
>
