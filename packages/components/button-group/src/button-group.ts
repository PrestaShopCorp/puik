import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, InjectionKey, Ref } from 'vue'
import type ButtonGroup from './button-group.vue'
import type { ButtonProps } from '@puik/components'

export type ButtonGroupType = ButtonProps & {
  label: string
}

export const buttonGroupProps = buildProps({
  modelValue: {
    type: [String, Number, Object, Array],
    required: false,
    default: undefined,
  },
} as const)

export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>

export type ButtonGroupInstance = InstanceType<typeof ButtonGroup>

export type ButtonGroupContext = {
  selected: Ref<string | number | Record<string, any>>
}
export const ButtonGroupKey: InjectionKey<ButtonGroupContext> =
  Symbol('ButtonGroup')
