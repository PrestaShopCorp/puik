import { defineCustomElement, type DefineComponent } from 'vue';
import { PuikTextarea } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import textareaStyles from '@prestashopcorp/puik-theme/puik-textarea.css?inline';

const PuikTextareaCe = defineCustomElement(PuikTextarea as DefineComponent<unknown, any, any, any>,
  {
    styles: [preflightStyles, baseStyles, textareaStyles]
  }
) as CustomElementWithName;
PuikTextareaCe.ceName = 'puik-textarea-ce';

export default PuikTextareaCe;
