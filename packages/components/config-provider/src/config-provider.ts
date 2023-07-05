import { defineComponent, renderSlot, type ExtractPropTypes } from 'vue'
import { buildProps } from '@puik/utils'
import { provideGlobalConfig } from '@puik/hooks'

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

export default defineComponent({
  name: 'PuikConfigProvider',
  props: configProviderProps,

  setup(props, { slots }) {
    const config = provideGlobalConfig(props)
    return () => renderSlot(slots, 'default', { config: config?.value })
  },
})
