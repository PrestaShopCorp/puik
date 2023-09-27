import {
  PuikTabNavigation,
  PuikTabNavigationGroupPanels,
  PuikTabNavigationTitle,
  PuikTabNavigationGroupTitles,
} from '@puik/components/tab-navigation'
import {
  PuikProgressStepper,
  PuikProgressStepperStep,
} from '@puik/components/progress-stepper'
import { PuikTable } from '@puik/components/table'
import { PuikSpinnerLoader } from '@puik/components/spinner-loader'
import {
  PuikSidebar,
  PuikSidebarGroupItem,
  PuikSidebarItem,
  PuikSidebarTitle,
} from '@puik/components/sidebar'
import { PuikPagination } from '@puik/components/pagination'
import { PuikTextarea } from '@puik/components/textarea'
import { PuikBreadcrumb } from '@puik/components/breadcrumb'
import { PuikAccordion, PuikAccordionGroup } from '@puik/components/accordion'
import { PuikBadge } from '@puik/components/badge'
import { PuikModal } from '@puik/components/modal'
import { PuikButtonGroup } from '@puik/components/button-group'
import {
  PuikMenu,
  PuikMenuItem,
  PuikMenuItemSeparator,
  PuikMenuItemTitle,
} from '@puik/components/menu'
import { PuikProgressBar } from '@puik/components/progress-bar'
import { PuikIcon, PuikIconCe } from '@puik/components/icon'
import { PuikLink } from '@puik/components/link'
import { PuikCard } from '@puik/components/card'
import { PuikSnackbar } from '@puik/components/snackbar'
import { PuikLabel } from '@puik/components/label'
import { PuikCheckbox } from '@puik/components/checkbox'
import { PuikRadio } from '@puik/components/radio'
import { PuikSelect, PuikOption } from '@puik/components/select'
import { PuikAlert } from '@puik/components/alert'
import { PuikTooltip, PuikTooltipCe } from '@puik/components/tooltip'
import { PuikSwitch } from '@puik/components/switch'
import { PuikButton } from '@puik/components/button'
import { PuikInput } from '@puik/components/input'
import { PuikConfigProvider } from '@puik/components/config-provider'
import type { Plugin } from 'vue'

// prettier-ignore
export default [
  PuikTabNavigationGroupPanels,
  PuikTabNavigationTitle,
  PuikTabNavigationGroupTitles,
  PuikTabNavigation,
  PuikProgressStepper,
  PuikProgressStepperStep,
  PuikTable,
  PuikSpinnerLoader,
  PuikSidebar,
  PuikSidebarGroupItem,
  PuikSidebarItem,
  PuikSidebarTitle,
  PuikPagination,
  PuikTextarea,
  PuikBreadcrumb,
  PuikAccordion,
  PuikAccordionGroup,
  PuikBadge,
  PuikModal,
  PuikButtonGroup,
  PuikMenu,
  PuikMenuItem,
  PuikMenuItemSeparator,
  PuikMenuItemTitle,
  PuikProgressBar,
  PuikIcon,
  PuikIconCe,
  PuikLink,
  PuikCard,
  PuikSnackbar,
  PuikLabel,
  PuikRadio,
  PuikInput,
  PuikCheckbox,
  PuikOption,
  PuikSelect,
  PuikAlert,
  PuikTooltip,
  PuikTooltipCe,
  PuikSwitch,
  PuikButton,
  PuikConfigProvider,
] as Plugin[]
