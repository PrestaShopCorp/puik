import { defineCustomElement, DefineComponent } from 'vue';
import { PuikTable } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-table.css';
import '@prestashopcorp/puik-theme/puik-table-search-input.css';
import '@prestashopcorp/puik-theme/puik-checkbox.css';

const PuikTableCe = defineCustomElement(PuikTable as DefineComponent<unknown, any, any, any>) as CustomElementWithName;
PuikTableCe.ceName = 'puik-table-ce';

export default PuikTableCe;
