import { defineCustomElement } from 'vue';
import { PuikTooltip } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikTooltipCe = defineCustomElement(PuikTooltip) as CustomElementWithName;
PuikTooltipCe.ceName = 'puik-tooltip-ce';

export default PuikTooltipCe;
