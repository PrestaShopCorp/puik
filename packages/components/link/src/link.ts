import { buildProps } from '@puik/utils'
import type { RouteLocationRaw } from 'vue-router'
import type { ExtractPropTypes, PropType } from 'vue'
import type Link from './link.vue'

export enum targetVariants {
  BLANK = '_blank',
  SELF = '_self',
  PARENT = '_parent',
  TOP = '_top',
}
export type TargetVariantsType = `${targetVariants}`
export enum linkSizes {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
}
export type LinkSizesType = `${linkSizes}`

export const linkProps = buildProps({
  size: {
    type: String as PropType<LinkSizesType>,
    required: false,
    default: 'md',
  },
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
    type: String as PropType<TargetVariantsType>,
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
