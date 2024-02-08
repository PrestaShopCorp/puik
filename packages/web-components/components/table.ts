import { defineCustomElement } from 'vue';
import { PuikTable } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikTableCe = defineCustomElement(PuikTable) as CustomElementWithName;
PuikTableCe.ceName = 'puik-table-ce';

export default PuikTableCe;
