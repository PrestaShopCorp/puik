import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type ExpansionPanel from './expansion-panel.vue'

export const expansionPanelProps = buildProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false,
    default: '',
  },
} as const)

export const expansionPanelEmitEmits = ['update:modelValue']

export type ExpansionPanelProps = ExtractPropTypes<typeof expansionPanelProps>

export type ExpansionPanelInstance = InstanceType<typeof ExpansionPanel>
