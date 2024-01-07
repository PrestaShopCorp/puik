import { defineCustomElement } from 'vue';
import { PuikButton } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikButtonCe = defineCustomElement(PuikButton) as CustomElementWithName;
PuikButtonCe.ceName = 'puik-button-ce';

export default PuikButtonCe;
