import '@prestashopcorp/puik-components/select/style/css';
import type Select from './select.vue';
import type { OptionType } from './option';
export interface SelectProps {
  options: OptionType[] | OptionType
  optionLabelKey?: string
  optionValueKey?: string
  optionDisabledKey?: string
  modelValue: any
  multiSelect?: boolean
  searchable?: boolean
  placeholder?: string
  searchPlaceholder?: string
  noMatchText?: string
  disabled?: boolean
  error?: string
}

export type SelectInstance = InstanceType<typeof Select>;
