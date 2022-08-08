import { buildProps } from '@puik/utils'
import type { ExtractPropTypes } from 'vue'
import type Icon from './icon.vue'

export const iconProps = buildProps({
  icon: {
    type: String,
    required: true,
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
} as const)

export type IconProps = ExtractPropTypes<typeof iconProps>

export type IconInstance = InstanceType<typeof Icon>
