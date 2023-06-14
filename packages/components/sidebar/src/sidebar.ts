import { buildProps } from '@puik/utils'
import type { Ref, ExtractPropTypes, InjectionKey } from 'vue'
import type Sidebar from './sidebar.vue'

export const sidebarProps = buildProps({
  modelValue: {
    type: Boolean,
    default: false,
    required: false,
  },
  name: {
    type: String,
    default: '',
    required: false,
  },
  temporary: {
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
