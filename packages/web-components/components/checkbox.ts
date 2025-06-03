import { defineCustomElement, type DefineComponent } from 'vue';
import { PuikCheckbox } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import checkboxStyles from '@prestashopcorp/puik-theme/puik-checkbox.css?inline';

const PuikCheckboxCe = defineCustomElement(PuikCheckbox as DefineComponent<unknown, any, any, any>,
  {
    styles: [preflightStyles, baseStyles, checkboxStyles]
  }
) as CustomElementWithName;
PuikCheckboxCe.ceName = 'puik-checkbox-ce';

export default PuikCheckboxCe;
