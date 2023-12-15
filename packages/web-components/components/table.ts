import { defineCustomElement } from 'vue';
import { PuikTable } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikTableCe = defineCustomElement(PuikTable) as CustomElementWithTagName;
PuikTableCe.tagName = 'puik-table-ce';

export default PuikTableCe;
