import { defineCustomElement, type DefineComponent } from 'vue';
import { PuikRadio } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import radioStyles from '@prestashopcorp/puik-theme/puik-radio.css?inline';

const PuikRadioCe = defineCustomElement(PuikRadio as DefineComponent<unknown, any, any, any>,
  {
    styles: [baseStyles, radioStyles]
  }
) as CustomElementWithName;
PuikRadioCe.ceName = 'puik-radio-ce';

export default PuikRadioCe;
