import { buildProps } from '@prestashopcorp/puik-utils'
import type { ExtractPropTypes } from 'vue'

export const configProviderProps = buildProps({
  locale: {
    type: String,
  },

  size: {
    type: String,
    values: ['large', 'default', 'small'],
  },

  zIndex: {
    type: Number,
  },
} as const)

export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>
