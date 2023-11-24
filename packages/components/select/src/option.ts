import type Option from './option.vue';

export interface DefaultOption {
  label: string | number
  value: string | number | Record<string, any>
}

export interface OptionProps {
  value: string | number | Record<string, any>
  label?: string | number
  disabled?: boolean
  dataTest?: string
}

export type OptionInstance = InstanceType<typeof Option>;
