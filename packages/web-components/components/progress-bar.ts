import { defineCustomElement } from 'vue';
import { PuikProgressBar } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikProgressBarCe = defineCustomElement(PuikProgressBar) as CustomElementWithTagName;
PuikProgressBarCe.tagName = 'puik-progress-bar-ce';

export default PuikProgressBarCe;
