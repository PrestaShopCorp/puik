import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type Divider from './divider.vue'

export const dividerProps = buildProps({} as const)

export type DividerProps = ExtractPropTypes<typeof dividerProps>

export type DividerInstance = InstanceType<typeof Divider>
