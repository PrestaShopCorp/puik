import type SkeletonLoader from './skeleton-loader.vue';

export enum PuikSkeletonLoaderVariants {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  Jumbotron = 'jumbotron',
  MegaJumbotron = 'mega-jumbotron',
  TextSmall = 'text-small',
  TextMedium = 'text-medium',
  TextLarge = 'text-large',
  Badge = 'badge',
  Tag = 'tag',
  Image = 'image',
  Graph = 'graph',
  Video = 'video',
}

export interface SkeletonLoaderProps {
  variant?: `${PuikSkeletonLoaderVariants}`
  tag?: string
  width?: string
  height?: string
}

export type SkeletonLoaderInstance = InstanceType<typeof SkeletonLoader>;
