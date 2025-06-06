import { defineCustomElement, type DefineComponent } from 'vue';
import { PuikProgressStepper } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import progressStepperStyles from '@prestashopcorp/puik-theme/puik-progress-stepper.css?inline';

const PuikProgressStepperCe = defineCustomElement(PuikProgressStepper as DefineComponent<unknown, any, any, any>,
  {
    styles: [preflightStyles, baseStyles, progressStepperStyles]
  }
) as CustomElementWithName;
PuikProgressStepperCe.ceName = 'puik-progress-stepper-ce';

export default PuikProgressStepperCe;
