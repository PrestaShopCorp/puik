import { defineCustomElement } from 'vue';
import { PuikProgressBar } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import progressBarStyles from '@prestashopcorp/puik-theme/puik-progress-bar.css?inline';

const PuikProgressBarCe = defineCustomElement(PuikProgressBar,
  {
    styles: [baseStyles, progressBarStyles]
  }
) as CustomElementWithName;
PuikProgressBarCe.ceName = 'puik-progress-bar-ce';

export default PuikProgressBarCe;
