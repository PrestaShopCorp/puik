import { defineCustomElement } from 'vue';
import { PuikButton } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-button.css';
import '@prestashopcorp/puik-theme/puik-icon.css';
import '@prestashopcorp/puik-theme/puik-spinner-loader.css';

const PuikButtonCe = defineCustomElement(PuikButton) as CustomElementWithName;
PuikButtonCe.ceName = 'puik-button-ce';

export default PuikButtonCe;
