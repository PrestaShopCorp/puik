import { defineCustomElement, DefineComponent } from 'vue';
import { PuikTextarea } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-textarea.css';

const PuikTextareaCe = defineCustomElement(PuikTextarea as DefineComponent<unknown, any, any, any>) as CustomElementWithName;
PuikTextareaCe.ceName = 'puik-textarea-ce';

export default PuikTextareaCe;
