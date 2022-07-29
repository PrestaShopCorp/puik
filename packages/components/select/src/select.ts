import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, InjectionKey, PropType, Ref } from 'vue'
import type Select from './select.vue'
import type { Option } from './option'

export const selectProps = buildProps({
  modelValue: {
    type: [String, Number, Object] as PropType<Option>,
    required: true,
  },
  labelKey: {
    type: String,
    required: false,
    default: 'label',
  },
  valueKey: {
    type: String,
    required: false,
    default: 'value',
  },
  id: {
    type: String,
    required: false,
    default: undefined,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
  error: {
    type: String,
    required: false,
    default: undefined,
  },
  options: {
    type: [Array, Object],
    required: false,
    default: undefined,
  },
  customFilterMethod: {
    type: Function,
    required: false,
    default: undefined,
  },
  noMatchText: {
    type: String,
    required: false,
    default: undefined,
  },
} as const)

export type SelectProps = ExtractPropTypes<typeof selectProps>

export const selectEmits = ['update:modelValue']
export type SelectEmits = typeof selectEmits

export type SelectInstance = InstanceType<typeof Select>

export type SelectContext = {
  setCurrentLabel: (label: string | number) => string | number
  selectedValue: Ref<string | number | object>
}

export const selectKey: InjectionKey<SelectContext> = Symbol('select')
