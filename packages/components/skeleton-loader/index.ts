import { withInstall } from '@prestashopcorp/puik-utils'

import SkeletonLoader from './src/skeleton-loader.vue'
import SkeletonLoaderGroup from './src/skeleton-loader-group.vue'

export const PuikSkeletonLoader = withInstall(SkeletonLoader)
export const PuikSkeletonLoaderGroup = withInstall(SkeletonLoaderGroup)
export default PuikSkeletonLoader

export * from './src/skeleton-loader'
export * from './src/skeleton-loader-group'
