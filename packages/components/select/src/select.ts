import '@prestashopcorp/puik-components/select/style/css';
import type Select from './select.vue';
import type { OptionType } from './option';
export interface SelectProps {
  id?: string
  label?: string
  required?: boolean
  optional?: boolean
  options: OptionType[]
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
  autocomplete?: string
  open?: boolean
}

export type SelectEmits = {
  'open': [state: boolean]
  'update:modelValue': [selectedOptions: any]
  'search': [searchQuery: string]
};

export type SelectInstance = InstanceType<typeof Select>;
