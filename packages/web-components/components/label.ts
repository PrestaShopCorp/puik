import { defineCustomElement } from 'vue';
import { PuikLabel } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikLabelCe = defineCustomElement(PuikLabel) as unknown as CustomElementWithTagName;
PuikLabelCe.tagName = 'puik-label-ce';

export default PuikLabelCe;
