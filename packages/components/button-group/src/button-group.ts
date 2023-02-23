import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type ButtonGroup from './button-group.vue'

export const buttonGroupProps = buildProps({} as const)

export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>

export type ButtonGroupInstance = InstanceType<typeof ButtonGroup>
