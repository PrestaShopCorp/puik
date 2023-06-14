import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type SkeletonLoader from './skeleton-loader.vue'

export const skeletonLoaderVariants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'jumbotron',
  'mega-jumbotron',
  'text-small',
  'text-medium',
  'text-large',
  'badge',
  'tag',
  'image',
  'graph',
  'video',
] as const

export type PuikSkeletonLoader = (typeof skeletonLoaderVariants)[number]

export const skeletonLoaderProps = buildProps({
  variant: {
    type: String as PropType<PuikSkeletonLoader>,
    required: false,
    default: 'text-medium',
  },
  tag: {
    type: String,
    required: false,
    default: 'div',
  },
  width: {
    type: String,
    required: false,
    default: undefined,
  },
  height: {
    type: String,
    required: false,
    default: undefined,
  },
} as const)

export type SkeletonLoaderProps = ExtractPropTypes<typeof skeletonLoaderProps>

export type SkeletonLoaderInstance = InstanceType<typeof SkeletonLoader>
