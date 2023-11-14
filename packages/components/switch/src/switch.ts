import type Switch from './switch.vue'

export interface SwitchProps {
  label?: string
  labelRight?: string
  disabled?: boolean
  modelValue?: boolean
  screenReaderText?: string
}

export type SwitchInstance = InstanceType<typeof Switch>
