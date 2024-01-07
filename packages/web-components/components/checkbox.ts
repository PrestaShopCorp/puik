import { defineCustomElement } from 'vue';
import { PuikCheckbox } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikCheckboxCe = defineCustomElement(PuikCheckbox) as CustomElementWithName;
PuikCheckboxCe.ceName = 'puik-checkbox-ce';

export default PuikCheckboxCe;
