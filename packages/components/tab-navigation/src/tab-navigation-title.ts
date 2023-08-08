import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type TabNavigationTitle from './tab-navigation-title.vue'

export const tabNavigationTitleProps = buildProps({
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  position: {
    type: Number,
    required: true,
  },
} as const)

export type TabNavigationTitleProps = ExtractPropTypes<
  typeof tabNavigationTitleProps
>

export type TabNavigationTitleInstance = InstanceType<typeof TabNavigationTitle>
