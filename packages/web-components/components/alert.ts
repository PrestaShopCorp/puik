import { defineCustomElement, DefineComponent } from 'vue';
import { PuikAlert } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikAlertCe = defineCustomElement(PuikAlert as DefineComponent<unknown, any, any, any>) as CustomElementWithName;
PuikAlertCe.ceName = 'puik-alert-ce';

export default PuikAlertCe;
