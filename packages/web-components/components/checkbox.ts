import { defineCustomElement, DefineComponent } from 'vue';
import { PuikCheckbox } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikCheckboxCe = defineCustomElement(PuikCheckbox as DefineComponent<unknown, any, any, any>) as CustomElementWithName;
PuikCheckboxCe.ceName = 'puik-checkbox-ce';

export default PuikCheckboxCe;
