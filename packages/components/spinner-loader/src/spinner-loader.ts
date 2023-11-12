import { buildProps } from '@puik/utils'
import type { ExtractPropTypes, PropType } from 'vue'
import type SpinnerLoader from './spinner-loader.vue'

export const puikSpinnerLoaderSizes = ['sm', 'md', 'lg'] as const
export type PuikSpinnerSizeType = (typeof puikSpinnerLoaderSizes)[number]

export const puikSpinnerLoaderColors = ['primary', 'reverse'] as const
export type PuikspinnerColorsType = (typeof puikSpinnerLoaderColors)[number]

export const puikSpinnerLoaderPositions = ['bottom', 'right'] as const
export type PuikspinnerPositionType =
  (typeof puikSpinnerLoaderPositions)[number]

export const spinnerLoaderProps = buildProps({
  size: {
    type: String as PropType<PuikSpinnerSizeType>,
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
  dataTest: {
    type: String,
    required: false,
    default: 'spinner-loader',
  },
} as const)

export type SpinnerLoaderProps = ExtractPropTypes<typeof spinnerLoaderProps>

export type SpinnerLoaderInstance = InstanceType<typeof SpinnerLoader>
