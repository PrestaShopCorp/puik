import { defineCustomElement } from 'vue';
import { PuikAlert } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikAlertCe = defineCustomElement(PuikAlert) as CustomElementWithName;
PuikAlertCe.ceName = 'puik-alert-ce';

export default PuikAlertCe;
