import { defineCustomElement } from 'vue';
import { PuikLabel } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-label.css';

const PuikLabelCe = defineCustomElement(PuikLabel) as CustomElementWithName;
PuikLabelCe.ceName = 'puik-label-ce';

export default PuikLabelCe;
