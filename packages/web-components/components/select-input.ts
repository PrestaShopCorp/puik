import { defineCustomElement } from 'vue';
import { PuikSelectInput } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikSelectInputCe = defineCustomElement(PuikSelectInput) as CustomElementWithName;
PuikSelectInputCe.ceName = 'puik-select-input-ce';

export default PuikSelectInputCe;
