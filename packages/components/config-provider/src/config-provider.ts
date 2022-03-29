import { defineComponent, renderSlot } from 'vue'
import { buildProps, definePropType } from '@puik/utils'
import { provideGlobalConfig } from '@puik/hooks'
import type { Language } from '@puik/locale'

export const configProviderProps = buildProps({
  locale: {
    type: definePropType<Language>(Object),
  },

  size: {
    type: String,
    values: ['large', 'default', 'small'],
  },

  zIndex: {
    type: Number,
  },
} as const)

export default defineComponent({
  name: 'PuikConfigProvider',
  props: configProviderProps,

  setup(props, { slots }) {
    const config = provideGlobalConfig(props)
    return () => renderSlot(slots, 'default', { config: config?.value })
  },
})
