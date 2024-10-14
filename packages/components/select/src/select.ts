import '@prestashopcorp/puik-components/select/style/css';
import type Select from './select.vue';
import type { OptionType } from './option';

export interface SelectProps {
  options: OptionType[]
  modelValue: any
  multiSelect?: boolean
  searchable?: boolean
}

export type SelectInstance = InstanceType<typeof Select>;
