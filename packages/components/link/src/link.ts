import { buildProps } from '@puik/utils'
import type { RouteLocationRaw } from 'vue-router'
import type { ExtractPropTypes, PropType } from 'vue'
import type Link from './link.vue'

export enum TargetVariants {
  BLANK = '_blank',
  SELF = '_self',
  PARENT = '_parent',
  TOP = '_top',
}

export const linkProps = buildProps({
  href: {
    type: String,
    required: false,
    default: undefined,
  },
  to: {
    type: [Object, String] as PropType<RouteLocationRaw>,
    required: false,
    default: undefined,
  },
  target: {
    type: String,
    values: TargetVariants,
    required: false,
    default: TargetVariants.SELF,
  },
  title: {
    type: String,
    required: false,
    default: undefined,
  },
} as const)

export type LinkProps = ExtractPropTypes<typeof linkProps>

export type LinkInstance = InstanceType<typeof Link>
