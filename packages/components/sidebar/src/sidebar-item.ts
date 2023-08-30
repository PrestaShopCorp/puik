import { buildProps } from '@puik/utils'
import type { RouteLocationRaw } from 'vue-router'
import type { ExtractPropTypes, PropType } from 'vue'
import type SidebarItem from './sidebar-item.vue'

export const sidebarItemProps = buildProps({
  title: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: false,
    default: undefined,
  },
  to: {
    type: [Object, String] as PropType<RouteLocationRaw>,
    required: false,
    default: undefined,
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
