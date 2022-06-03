import { PuikAlert } from '@puik/components/alert'
import { PuikTooltip } from '@puik/components/tooltip'
import { PuikSwitch } from '@puik/components/switch'
import { PuikButton } from '@puik/components/button'
import { PuikConfigProvider } from '@puik/components/config-provider'
import type { Plugin } from 'vue'

// prettier-ignore
export default [
  PuikAlert,
  PuikTooltip,
  PuikSwitch,
  PuikButton,
  PuikConfigProvider,
] as Plugin[]
