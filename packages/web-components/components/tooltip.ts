import { defineCustomElement } from 'vue';
import { PuikTooltip } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-tooltip.css';
import '@prestashopcorp/puik-theme/puik-icon.css';

const PuikTooltipCe = defineCustomElement(PuikTooltip) as CustomElementWithName;
PuikTooltipCe.ceName = 'puik-tooltip-ce';

export default PuikTooltipCe;
