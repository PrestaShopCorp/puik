import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type SkeletonLoaderGroup from './skeleton-loader-group.vue'

export const skeletonLoaderGroupProps = buildProps({
  tag: {
    type: String,
    required: false,
    default: 'div',
  },
} as const)

export type SkeletonLoaderGroupProps = ExtractPropTypes<
  typeof skeletonLoaderGroupProps
>

export type SkeletonLoaderGroupInstance = InstanceType<
  typeof SkeletonLoaderGroup
>
