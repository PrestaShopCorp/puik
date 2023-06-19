import { buildProps } from '@puik/utils'
import type { Ref, ExtractPropTypes, InjectionKey } from 'vue'
import type Sidebar from './sidebar.vue'

export const sidebarProps = buildProps({
  expanded: {
    type: Boolean,
    default: false,
    required: false,
  },
  openAccordion: {
    type: String,
    default: '',
    required: false,
  },
  mobile: {
    type: Boolean,
    default: false,
    required: false,
  },
} as const)

export type SidebarProps = ExtractPropTypes<typeof sidebarProps>

export type SidebarInstance = InstanceType<typeof Sidebar>

export type SidebarContext = {
  extended: Ref<boolean>
}

export const sidebarKey: InjectionKey<SidebarContext> = Symbol('sidebar')
export const groupItemKey: InjectionKey<boolean> = Symbol('sidebar-group-item')
