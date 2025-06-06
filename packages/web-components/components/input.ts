import { defineCustomElement, type DefineComponent } from 'vue';
import { PuikInput } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import inputStyles from '@prestashopcorp/puik-theme/puik-input.css?inline';
import iconStyles from '@prestashopcorp/puik-theme/puik-icon.css?inline';

const PuikInputCe = defineCustomElement(PuikInput as DefineComponent<unknown, any, any, any>,
  {
    styles: [preflightStyles, baseStyles, inputStyles, iconStyles]
  }
) as CustomElementWithName;
PuikInputCe.ceName = 'puik-input-ce';

export default PuikInputCe;
