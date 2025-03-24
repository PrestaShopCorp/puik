import { defineCustomElement, DefineComponent } from 'vue';
import { PuikInput } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-input.css';
import '@prestashopcorp/puik-theme/puik-icon.css';

const PuikInputCe = defineCustomElement(PuikInput as DefineComponent<unknown, any, any, any>) as CustomElementWithName;
PuikInputCe.ceName = 'puik-input-ce';

export default PuikInputCe;
