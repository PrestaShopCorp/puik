import '@prestashopcorp/puik-components/select/style/css';
import type Select from './select.vue';
import type { OptionType } from './option';
export interface SelectProps {
  options: OptionType[]
  labelKey: string
  valueKey: string
  modelValue: any
  multiSelect?: boolean
  searchable?: boolean
  disabled?: boolean
  error?: string
}

export type SelectInstance = InstanceType<typeof Select>;
