import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type SidebarItem from './sidebar-item.vue'

export const sidebarItemProps = buildProps({
  href: {
    type: String,
    required: false,
    default: undefined,
  },
  to: {
    type: String,
    required: false,
    default: undefined,
  },
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: false,
    default: undefined,
  },
  active: {
    type: Boolean,
    required: false,
    default: false,
  },
} as const)

export type SidebarItemProps = ExtractPropTypes<typeof sidebarItemProps>

export type SidebarItemInstance = InstanceType<typeof SidebarItem>
