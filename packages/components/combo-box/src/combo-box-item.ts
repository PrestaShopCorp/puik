import type ComboBoxItem from './combo-box-item.vue';

export interface ComboBoxItemProps {
  value: string | number | boolean | Record<string, any>
  label?: string
}

export type ComboBoxItemInstance = InstanceType<typeof ComboBoxItem>;
