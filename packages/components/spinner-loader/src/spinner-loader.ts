import type SpinnerLoader from './spinner-loader.vue';

export enum PuikSpinnerLoaderSizes {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}

export enum PuikSpinnerLoaderColors {
  Primary = 'primary',
  Reverse = 'reverse',
}

export enum PuikSpinnerLoaderPositions {
  Bottom = 'bottom',
  Right = 'right',
}

export interface SpinnerLoaderProps {
  size?: `${PuikSpinnerLoaderSizes}`
  color?: `${PuikSpinnerLoaderColors}`
  position?: `${PuikSpinnerLoaderPositions}`
  label?: string
}

export type SpinnerLoaderInstance = InstanceType<typeof SpinnerLoader>;
