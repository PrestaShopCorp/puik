import { PuikBreadcrumb } from '@puik/components/breadcrumb'
import { PuikButtonGroup } from '@puik/components/button-group'
import { PuikProgressBar } from '@puik/components/progress-bar'
import { PuikIcon } from '@puik/components/icon'
import { PuikLink } from '@puik/components/link'
import { PuikCard } from '@puik/components/card'
import { PuikLabel } from '@puik/components/label'
import { PuikCheckbox } from '@puik/components/checkbox'
import { PuikRadio } from '@puik/components/radio'
import { PuikSelect, PuikOption } from '@puik/components/select'
import { PuikAlert } from '@puik/components/alert'
import { PuikTooltip } from '@puik/components/tooltip'
import { PuikSwitch } from '@puik/components/switch'
import { PuikButton } from '@puik/components/button'
import { PuikInput } from '@puik/components/input'
import { PuikConfigProvider } from '@puik/components/config-provider'
import type { Plugin } from 'vue'

// prettier-ignore
export default [
  PuikBreadcrumb,
  PuikButtonGroup,
  PuikProgressBar,
  PuikIcon,
  PuikLink,
  PuikCard,
  PuikLabel,
  PuikRadio,
  PuikInput,
  PuikCheckbox,
  PuikOption,
  PuikSelect,
  PuikAlert,
  PuikTooltip,
  PuikSwitch,
  PuikButton,
  PuikConfigProvider,
] as Plugin[]
