import type { InjectionKey, Ref } from 'vue'
import type ButtonGroup from './button-group.vue'
import type { ButtonProps } from '@prestashopcorp/puik-components'

export type ButtonGroupType = ButtonProps & {
  label: string
}

export interface ButtonGroupProps {
  modelValue?: string | number | Record<string, any> | any[]
}

export type ButtonGroupInstance = InstanceType<typeof ButtonGroup>

export type ButtonGroupContext = {
  selected: Ref<string | number | Record<string, any>>
}
export const ButtonGroupKey: InjectionKey<ButtonGroupContext> =
  Symbol('ButtonGroup')
