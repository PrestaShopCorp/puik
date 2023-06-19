import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type Badge from './badge.vue'

export const badgeVariants = [
  'success',
  'warning',
  'danger',
  'info',
  'neutral',
] as const

export type BadgeVariantsType = (typeof badgeVariants)[number]

export const badgeProps = buildProps({
  variant: {
    type: String as PropType<BadgeVariantsType>,
    default: 'neutral',
  },
} as const)

export type BadgeProps = ExtractPropTypes<typeof badgeProps>

export type BadgeInstance = InstanceType<typeof Badge>
