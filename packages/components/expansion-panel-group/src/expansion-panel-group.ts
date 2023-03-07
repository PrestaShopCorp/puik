import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, InjectionKey, PropType, Ref } from 'vue'
import type ExpansionPanelGroup from './expansion-panel-group.vue'

export const expansionPanelGroupProps = buildProps({
  modelValue: {
    type: [String, Array, null] as PropType<string | string[] | null>,
    required: false,
    default: null,
  },
  multiple: {
    type: Boolean,
    required: false,
    default: false,
  },
} as const)

export type ExpansionPanelGroupProps = ExtractPropTypes<
  typeof expansionPanelGroupProps
>

export type ExpansionPanelGroupInstance = InstanceType<
  typeof ExpansionPanelGroup
>

export type ExpansionPanelState = {
  name: string
  expanded: boolean
}

export type ExpansionPanelGroupContext = {
  panelsList: Ref<ExpansionPanelState[]>
  handleChange: (name: string) => void
  selection: Ref<string | string[]>
}

export const expansionPanelGroupKey: InjectionKey<ExpansionPanelGroupContext> =
  Symbol('expansion-panel-group')
