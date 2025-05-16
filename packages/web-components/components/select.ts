import { defineCustomElement, type DefineComponent } from 'vue';
import { PuikSelect } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import selectStyles from '@prestashopcorp/puik-theme/puik-select.css?inline';
import optionStyles from '@prestashopcorp/puik-theme/puik-option.css?inline';
import checkboxStyles from '@prestashopcorp/puik-theme/puik-checkbox.css?inline';
import chipStyles from '@prestashopcorp/puik-theme/puik-chip.css?inline';
import inputStyles from '@prestashopcorp/puik-theme/puik-input.css?inline';
import iconStyles from '@prestashopcorp/puik-theme/puik-icon.css?inline';
import labelStyles from '@prestashopcorp/puik-theme/puik-label.css?inline';

const PuikSelectCe = defineCustomElement(PuikSelect as DefineComponent<unknown, any, any, any>,
  {
    styles: [baseStyles, selectStyles, optionStyles, checkboxStyles, chipStyles, inputStyles, iconStyles, labelStyles]
  }
) as CustomElementWithName;
PuikSelectCe.ceName = 'puik-select-ce';

export default PuikSelectCe;
