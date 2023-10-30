import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type SidebarTitle from './sidebar-title.vue'

export const sidebarTitleProps = buildProps({
  tag: {
    type: String,
    required: false,
    default: 'h3',
  },
  sidebarTitleDataTest: {
    type: String,
    required: false,
    default: undefined,
  },
} as const)

export type SidebarTitleProps = ExtractPropTypes<typeof sidebarTitleProps>
export type SidebarTitleInstance = InstanceType<typeof SidebarTitle>
