import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type Card from './card.vue'

export const cardProps = buildProps({} as const)

export type CardProps = ExtractPropTypes<typeof cardProps>

export type CardInstance = InstanceType<typeof Card>
