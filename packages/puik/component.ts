import { PuikLabel } from '@puik/components/label'
import { PuikCheckbox } from '@puik/components/checkbox'
import { PuikRadio } from '@puik/components/radio'
import { PuikAlert } from '@puik/components/alert'
import { PuikTooltip } from '@puik/components/tooltip'
import { PuikSwitch } from '@puik/components/switch'
import { PuikButton } from '@puik/components/button'
import { PuikInput } from '@puik/components/input'
import { PuikConfigProvider } from '@puik/components/config-provider'
import type { Plugin } from 'vue'

// prettier-ignore
export default [
  PuikLabel,
  PuikRadio,
  PuikInput,
  PuikCheckbox,
  PuikAlert,
  PuikTooltip,
  PuikSwitch,
  PuikButton,
  PuikConfigProvider,
] as Plugin[]
