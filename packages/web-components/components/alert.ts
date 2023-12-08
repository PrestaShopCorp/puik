import { defineCustomElement } from 'vue';
import { PuikAlert } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikAlertCe = defineCustomElement(PuikAlert) as unknown as CustomElementWithTagName;
PuikAlertCe.tagName = 'puik-alert-ce';

export default PuikAlertCe;
