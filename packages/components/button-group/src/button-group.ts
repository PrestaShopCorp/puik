import type { InjectionKey, Ref, WritableComputedRef } from 'vue';
import type ButtonGroup from './button-group.vue';
import type { ButtonProps } from '@prestashopcorp/puik-components';

export type ButtonGroupType = ButtonProps & {
  label: string
};

export interface ButtonGroupProps {
  modelValue?: string | number | Record<string, any> | any[]
}

export type ButtonGroupInstance = InstanceType<typeof ButtonGroup>;

export type ButtonGroupContext = {
  selected:
  | Ref<string | number | any[] | Record<string, any> | undefined>
  | WritableComputedRef<
  string | number | any[] | Record<string, any> | undefined
  >
};
export const ButtonGroupKey: InjectionKey<ButtonGroupContext> =
  Symbol('ButtonGroup');
