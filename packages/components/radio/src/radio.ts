import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type Radio from './radio.vue'

export const radioProps = buildProps({} as const)

export type RadioProps = ExtractPropTypes<typeof radioProps>

export type RadioInstance = InstanceType<typeof Radio>
