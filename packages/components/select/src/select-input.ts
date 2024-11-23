import '@prestashopcorp/puik-components/select-input/style/css';
import type SelectInput from './select-input.vue';
import { OptionType } from './option';

export interface SelectInputProps {
  id: string
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
  customFilterMethod?: (query: string) => any[] | Record<string, any>
  placeholder?: string
  searchPlaceholder?: string
  noMatchText?: string
  disabled?: boolean
  error?: string
  autocomplete?: string
  open?: boolean
}

export type SelectInputEmits = {
  'open': [state: boolean]
  'update:modelValue': [selectedOptions: any]
};

export type SelectInputInstance = InstanceType<typeof SelectInput>;
