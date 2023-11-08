import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type TabNavigationTitle from './tab-navigation-title.vue'

export const tabNavigationTitleProps = buildProps({
  position: {
    type: Number,
    required: true,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
} as const)

export type TabNavigationTitleProps = ExtractPropTypes<
  typeof tabNavigationTitleProps
>

export type TabNavigationTitleInstance = InstanceType<typeof TabNavigationTitle>
