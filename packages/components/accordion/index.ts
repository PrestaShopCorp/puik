import { withInstall } from '@prestashopcorp/puik-utils'

import AccordionGroup from './src/accordion-group.vue'
import Accordion from './src/accordion.vue'

export const PuikAccordion = withInstall(Accordion)
export const PuikAccordionGroup = withInstall(AccordionGroup)

export default PuikAccordion

export * from './src/accordion'
export * from './src/accordion-group'
