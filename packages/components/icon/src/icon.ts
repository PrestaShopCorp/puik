import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type Icon from './icon.vue'

export const iconProps = buildProps({
  icon: {
    type: String,
    required: true,
  },
  dataTest: {
    type: String,
    required: false,
    default: undefined,
  },
  nodeType: {
    type: String,
    default: 'div',
  },
  fontSize: {
    type: [Number, String],
    default: '1rem',
    required: false,
  },
  color: {
    type: String,
    default: '#00000',
    required: false,
  },
  isDisabled: {
    type: Boolean,
    default: false,
    required: false,
  },
} as const)

export type IconProps = ExtractPropTypes<typeof iconProps>

export type IconInstance = InstanceType<typeof Icon>
