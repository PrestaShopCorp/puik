import { buildProps } from '@puik/utils'
import type { Ref, ExtractPropTypes, PropType, InjectionKey } from 'vue'
import type Sidebar from './sidebar.vue'

export enum SidebarVariantsList {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export type SidebarVariantsType = `${SidebarVariantsList}`

export const sidebarProps = buildProps({
  variant: {
    type: String as PropType<SidebarVariantsType>,
    default: 'primary',
    required: false,
  },
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
