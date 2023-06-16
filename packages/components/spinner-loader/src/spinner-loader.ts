import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type SpinnerLoader from './spinner-loader.vue'

export enum spinnerSizes {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
}
export type SpinnerSizeType = `${spinnerSizes}`

export enum spinnerColors {
  PRIMARY = 'primary',
  REVERSE = 'reverse',
}
export type SpinnerColorsType = `${spinnerColors}`

export enum spinnerPosition {
  BOTTOM = 'bottom',
  RIGHT = 'right',
}
export type SpinnerPositionType = `${spinnerPosition}`

export const spinnerLoaderProps = buildProps({
  size: {
    type: String as PropType<SpinnerSizeType>,
    required: false,
    default: 'md',
  },
  color: {
    type: String as PropType<SpinnerColorsType>,
    required: false,
    default: 'primary',
  },
  label: {
    type: String,
    required: false,
    default: undefined,
  },
  position: {
    type: String as PropType<SpinnerPositionType>,
    required: false,
    default: 'bottom',
  },
} as const)

export type SpinnerLoaderProps = ExtractPropTypes<typeof spinnerLoaderProps>

export type SpinnerLoaderInstance = InstanceType<typeof SpinnerLoader>
