import type { InjectionKey, Ref } from 'vue';
import type Select from './select.vue';
import type { DefaultOption } from './option';

export interface SelectProps {
  modelValue: string | number | Record<string, any>
  customLabel?: string
  labelKey?: string
  valueKey?: string
  id?: string
  disabled?: boolean
  name?: string
  autocomplete?: string
  placeholder?: string
  error?: string
  options?: any[] | Record<string, any>
  customFilterMethod?: (query: string) => any[] | Record<string, any>
  noMatchText?: string
  zindex?: number
  fullWidth?: boolean
}

export type SelectInstance = InstanceType<typeof Select>;

export type SelectContext = {
  handleAutoComplete: (label: string | number) => void
  selectedValue: Ref<string | number | Record<string, any>>
  optionsList: Ref<DefaultOption[]>
  labelKey: string
};

export const selectKey: InjectionKey<SelectContext> = Symbol('select');
