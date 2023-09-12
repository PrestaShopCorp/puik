// import { defineCustomElement } from 'vue'
import { defineCustomElement } from '@vue/runtime-dom'
import { withInstall } from '@puik/utils'

import TooltipCe from './src/tooltip.ce.vue'
import type { VueElement } from 'vue'

export const PuikTooltipCe = defineCustomElement(withInstall(TooltipCe))

// customElements.define('puik-tooltip-ce', PuikTooltipCe)
window.customElements.define('puik-tooltip-ce', PuikTooltipCe)
export default PuikTooltipCe

declare module 'vue' {
  export interface GlobalComponents {
    PuikTooltipCe: typeof PuikTooltipCe
  }
}

export * from './src/tooltip-ce'
