import { defineCustomElement } from 'vue';
import { PuikButton } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikButtonCe = defineCustomElement(PuikButton) as unknown as CustomElementWithTagName;
PuikButtonCe.tagName = 'puik-button-ce';

export default PuikButtonCe;
