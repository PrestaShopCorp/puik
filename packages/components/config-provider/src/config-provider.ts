import { defineComponent, renderSlot } from 'vue'
import { buildProps, definePropType } from '@puik/utils/props'
import { useLocaleProps, provideLocale, provideGlobalConfig } from '@puik/hooks'

export const configProviderProps = buildProps({
  ...useLocaleProps,

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
    provideLocale()
    const config = provideGlobalConfig(props)
    return () => renderSlot(slots, 'default', { config: config?.value })
  },
})
