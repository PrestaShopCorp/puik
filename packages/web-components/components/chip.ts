import { defineCustomElement } from 'vue';
import { PuikChip } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import chipStyles from '@prestashopcorp/puik-theme/puik-chip.css?inline';

const PuikChipCe = defineCustomElement(PuikChip,
  {
    styles: [baseStyles, chipStyles]
  }
) as CustomElementWithName;
PuikChipCe.ceName = 'puik-chip-ce';

export default PuikChipCe;
