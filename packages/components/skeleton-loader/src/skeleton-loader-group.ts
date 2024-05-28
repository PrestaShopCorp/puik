import type SkeletonLoaderGroup from './skeleton-loader-group.vue';

export interface SkeletonLoaderGroupProps {
  tag?: string
}

export type SkeletonLoaderGroupInstance = InstanceType<
  typeof SkeletonLoaderGroup
>;
