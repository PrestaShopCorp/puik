import { defineCustomElement } from 'vue';
import { PuikButton } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikButtonCe = defineCustomElement(PuikButton) as CustomElementWithTagName;
PuikButtonCe.tagName = 'puik-button-ce';

export default PuikButtonCe;
