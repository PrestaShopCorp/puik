import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type SidebarGroupItem from './sidebar-group-item.vue'

export const sidebarGroupItemProps = buildProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: undefined,
    required: false,
  },
} as const)

export type SidebarGroupItemProps = ExtractPropTypes<
  typeof sidebarGroupItemProps
>

export type SidebarGroupItemInstance = InstanceType<typeof SidebarGroupItem>
