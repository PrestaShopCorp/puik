import { buildProps } from '@prestashopcorp/puik-utils'
import type { ExtractPropTypes } from 'vue'
import type TabNavigationGroupTitles from './tab-navigation-group-titles.vue'

export const tabNavigationGroupTitlesProps = buildProps({
  ariaLabel: {
    type: String,
    required: true,
  },
} as const)

export type TabNavigationGroupTitlesProps = ExtractPropTypes<
  typeof tabNavigationGroupTitlesProps
>

export type TabNavigationGroupTitlesInstance = InstanceType<
  typeof TabNavigationGroupTitles
>
