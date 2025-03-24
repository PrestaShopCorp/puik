import { defineCustomElement } from 'vue';
import { PuikSpinnerLoader } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-spinner-loader.css';

const PuikSpinnerLoaderCe = defineCustomElement(PuikSpinnerLoader) as CustomElementWithName;
PuikSpinnerLoaderCe.ceName = 'puik-spinner-loader-ce';

export default PuikSpinnerLoaderCe;
