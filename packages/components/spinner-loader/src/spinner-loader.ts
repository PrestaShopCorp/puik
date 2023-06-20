import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type SpinnerLoader from './spinner-loader.vue'

export enum PuikspinnerSizes {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
}
export type SpinnerSizeType = `${PuikspinnerSizes}`

export enum PuikspinnerColors {
  PRIMARY = 'primary',
  REVERSE = 'reverse',
}
export type PuikspinnerColorsType = `${PuikspinnerColors}`

export enum PuikspinnerPosition {
  BOTTOM = 'bottom',
  RIGHT = 'right',
}
export type PuikspinnerPositionType = `${PuikspinnerPosition}`

export const spinnerLoaderProps = buildProps({
  size: {
    type: String as PropType<SpinnerSizeType>,
    required: false,
    default: 'md',
  },
  color: {
    type: String as PropType<PuikspinnerColorsType>,
    required: false,
    default: 'primary',
  },
  label: {
    type: String,
    required: false,
    default: undefined,
  },
  position: {
    type: String as PropType<PuikspinnerPositionType>,
    required: false,
    default: 'bottom',
  },
} as const)

export type SpinnerLoaderProps = ExtractPropTypes<typeof spinnerLoaderProps>

export type SpinnerLoaderInstance = InstanceType<typeof SpinnerLoader>
