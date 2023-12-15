import { defineCustomElement } from 'vue';
import { PuikSelect } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikSelectCe = defineCustomElement(PuikSelect) as CustomElementWithTagName;
PuikSelectCe.tagName = 'puik-select-ce';

export default PuikSelectCe;
