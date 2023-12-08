import { defineCustomElement } from 'vue';
import { PuikTooltip } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikTooltipCe = defineCustomElement(PuikTooltip) as unknown as CustomElementWithTagName;
PuikTooltipCe.tagName = 'puik-tooltip-ce';

export default PuikTooltipCe;
