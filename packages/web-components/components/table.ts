import { defineCustomElement, type DefineComponent } from 'vue';
import { PuikTable } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import puikTableStyles from '@prestashopcorp/puik-theme/puik-table.css?inline';
import puikTableSearchInputStyles from '@prestashopcorp/puik-theme/puik-table-search-input.css?inline';
import puikCheckboxStyles from '@prestashopcorp/puik-theme/puik-checkbox.css?inline';

const PuikTableCe = defineCustomElement(PuikTable as DefineComponent<unknown, any, any, any>,
  {
    styles: [preflightStyles, baseStyles, puikTableStyles, puikTableSearchInputStyles, puikCheckboxStyles]
  }
) as CustomElementWithName;
PuikTableCe.ceName = 'puik-table-ce';

export default PuikTableCe;
