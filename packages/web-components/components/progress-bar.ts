import { defineCustomElement } from 'vue';
import { PuikProgressBar } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-progress-bar.css';

const PuikProgressBarCe = defineCustomElement(PuikProgressBar) as CustomElementWithName;
PuikProgressBarCe.ceName = 'puik-progress-bar-ce';

export default PuikProgressBarCe;
