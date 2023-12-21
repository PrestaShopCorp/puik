import type ComboBox from './combo-box.vue';

export interface ComboBoxProps {
  modelValue: string | number | boolean | Record<string, any>
  options: string[] | number[] | boolean[] | Array<Record<string, any>>
  placeholder?: string
  searchPlaceholder?: string
  noMatchText?: string
  valueAttribute?: string
  optionAttribute?: string
  filterFunction?: (val: any[], term: string) => any[]
}

export type ComboBoxInstance = InstanceType<typeof ComboBox>;
