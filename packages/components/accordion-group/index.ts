import { withInstall } from '@puik/utils'

import AccordionGroup from './src/accordion-group.vue'
import Accordion from './src/accordion.vue'

export const PuikAccordionGroup = withInstall(AccordionGroup)
export default PuikAccordionGroup

export const PuikAccordion = withInstall(Accordion)

export * from './src/accordion-group'
export * from './src/accordion'
