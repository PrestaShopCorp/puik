import { defineCustomElement } from 'vue'
import { withInstall } from '@puik/utils'

import Tooltip from './src/tooltip.vue'
import TooltipCe from './src/tooltip.ce.vue'

export const PuikTooltip = withInstall(Tooltip)
export const PuikTooltipCe = defineCustomElement(withInstall(TooltipCe))

customElements.define('puik-tooltip-ce', PuikTooltipCe)

export * from './src/tooltip'

declare module 'vue' {
  export interface GlobalComponents {
    PuikTooltipCe: typeof PuikTooltipCe
  }
}
