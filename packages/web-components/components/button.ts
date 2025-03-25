import { defineCustomElement } from 'vue';
import { PuikButton } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import buttonStyles from '@prestashopcorp/puik-theme/puik-button.css?inline';
import iconStyles from '@prestashopcorp/puik-theme/puik-icon.css?inline';
import spinnerLoaderStyle from '@prestashopcorp/puik-theme/puik-spinner-loader.css?inline';

const PuikButtonCe = defineCustomElement(PuikButton,
  {
    styles: [baseStyles, buttonStyles, iconStyles, spinnerLoaderStyle]
  }
) as CustomElementWithName;
PuikButtonCe.ceName = 'puik-button-ce';

export default PuikButtonCe;
