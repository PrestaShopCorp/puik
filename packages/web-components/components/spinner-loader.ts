import { defineCustomElement } from 'vue';
import { PuikSpinnerLoader } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import spinnerLoaderStyles from '@prestashopcorp/puik-theme/puik-spinner-loader.css?inline';

const PuikSpinnerLoaderCe = defineCustomElement(PuikSpinnerLoader,
  {
    styles: [baseStyles, spinnerLoaderStyles]
  }
) as CustomElementWithName;
PuikSpinnerLoaderCe.ceName = 'puik-spinner-loader-ce';

export default PuikSpinnerLoaderCe;
