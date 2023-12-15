import { defineCustomElement } from 'vue';
import { PuikSpinnerLoader } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikSpinnerLoaderCe = defineCustomElement(PuikSpinnerLoader) as CustomElementWithTagName;
PuikSpinnerLoaderCe.tagName = 'puik-spinner-loader-ce';

export default PuikSpinnerLoaderCe;
