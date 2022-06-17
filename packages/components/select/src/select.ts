import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Select from './select.vue'

export interface Option {
  label?: string
  value: string
}

export const selectProps = buildProps({
  modelValue: {
    type: Object as PropType<Option>,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
} as const)

export type SelectProps = ExtractPropTypes<typeof selectProps>

export const selectEmits = ['update:modelValue']
export type SelectEmits = typeof selectEmits

export type SelectInstance = InstanceType<typeof Select>
