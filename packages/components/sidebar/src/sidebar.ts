import { buildProps } from '@puik/utils'
import type { Ref, ExtractPropTypes, InjectionKey } from 'vue'
import type Sidebar from './sidebar.vue'

export const sidebarProps = buildProps({
  expanded: {
    type: Boolean,
    required: false,
    default: false,
  },
  openAccordion: {
    type: String,
    required: false,
    default: '',
  },
  mobile: {
    type: Boolean,
    required: false,
    default: false,
  },
} as const)

export type SidebarProps = ExtractPropTypes<typeof sidebarProps>

export type SidebarInstance = InstanceType<typeof Sidebar>

export type SidebarContext = {
  extended: Ref<boolean>
}

export const sidebarKey: InjectionKey<SidebarContext> = Symbol('sidebar')
export const groupItemKey: InjectionKey<boolean> = Symbol('sidebar-group-item')
