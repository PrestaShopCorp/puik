import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Badge from './badge.vue'

export enum badgeVariants {
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
  INFO = 'info',
  NEUTRAL = 'neutral',
}

export type BadgeVariantsType = `${badgeVariants}`

export const badgeProps = buildProps({
  variant: {
    type: String as PropType<BadgeVariantsType>,
    default: 'neutral',
  },
} as const)

export type BadgeProps = ExtractPropTypes<typeof badgeProps>

export type BadgeInstance = InstanceType<typeof Badge>
