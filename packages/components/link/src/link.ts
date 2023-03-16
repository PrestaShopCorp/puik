import { buildProps } from '@prestashopcorp/puik-utils'
import type { RouteLocationRaw } from 'vue-router'
import type { ExtractPropTypes, PropType } from 'vue'
import type Link from './link.vue'

export const targetVariants = ['_blank', '_self', '_parent', '_top']

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
    values: targetVariants,
    required: false,
    default: '_self',
  },
  title: {
    type: String,
    required: false,
    default: undefined,
  },
} as const)

export type LinkProps = ExtractPropTypes<typeof linkProps>

export type LinkInstance = InstanceType<typeof Link>
