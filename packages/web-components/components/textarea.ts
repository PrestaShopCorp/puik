import { defineCustomElement, DefineComponent } from 'vue';
import { PuikTextarea } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import textareaStyles from '@prestashopcorp/puik-theme/puik-textarea.css?inline';

const PuikTextareaCe = defineCustomElement(PuikTextarea as DefineComponent<unknown, any, any, any>,
  {
    styles: [baseStyles, textareaStyles]
  }
) as CustomElementWithName;
PuikTextareaCe.ceName = 'puik-textarea-ce';

export default PuikTextareaCe;
