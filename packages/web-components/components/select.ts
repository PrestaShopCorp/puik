import { defineCustomElement, DefineComponent } from 'vue';
import { PuikSelect } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-select.css';
import '@prestashopcorp/puik-theme/puik-option.css';
import '@prestashopcorp/puik-theme/puik-checkbox.css';
import '@prestashopcorp/puik-theme/puik-chip.css';
import '@prestashopcorp/puik-theme/puik-input.css';
import '@prestashopcorp/puik-theme/puik-icon.css';
import '@prestashopcorp/puik-theme/puik-label.css';

const PuikSelectCe = defineCustomElement(PuikSelect as DefineComponent<unknown, any, any, any>) as CustomElementWithName;
PuikSelectCe.ceName = 'puik-select-ce';

export default PuikSelectCe;
