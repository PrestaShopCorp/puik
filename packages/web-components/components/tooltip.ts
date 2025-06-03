import { defineCustomElement } from 'vue';
import { PuikTooltip } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import tooltipStyles from '@prestashopcorp/puik-theme/puik-tooltip.css?inline';
import iconStyles from '@prestashopcorp/puik-theme/puik-icon.css?inline';

const PuikTooltipCe = defineCustomElement(PuikTooltip,
  {
    styles: [preflightStyles, baseStyles, tooltipStyles, iconStyles]
  }
) as CustomElementWithName;
PuikTooltipCe.ceName = 'puik-tooltip-ce';

export default PuikTooltipCe;
