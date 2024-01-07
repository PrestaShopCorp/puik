import { defineCustomElement } from 'vue';
import { PuikSelect } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikSelectCe = defineCustomElement(PuikSelect) as CustomElementWithName;
PuikSelectCe.ceName = 'puik-select-ce';

export default PuikSelectCe;
