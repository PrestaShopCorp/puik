import { defineCustomElement } from 'vue';
import { PuikChip } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import chipStyles from '@prestashopcorp/puik-theme/puik-chip.css?inline';

const PuikChipCe = defineCustomElement(PuikChip,
  {
    styles: [preflightStyles, baseStyles, chipStyles]
  }
) as CustomElementWithName;
PuikChipCe.ceName = 'puik-chip-ce';

export default PuikChipCe;
