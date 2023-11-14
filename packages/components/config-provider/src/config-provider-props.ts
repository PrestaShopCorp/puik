import type { ExtractPropTypes } from 'vue'

export const configProviderProps = {
  locale: {
    type: String,
    required: false,
    default: 'en',
  },
}

export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>
