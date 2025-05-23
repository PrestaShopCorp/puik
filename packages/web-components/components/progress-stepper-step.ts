import { defineCustomElement, type DefineComponent } from 'vue';
import { PuikProgressStepperStep } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import progressStepperStepStyles from '@prestashopcorp/puik-theme/puik-progress-stepper-step.css?inline';
import button from '@prestashopcorp/puik-theme/puik-button.css?inline';

const PuikProgressStepperStepCe = defineCustomElement(PuikProgressStepperStep as DefineComponent<unknown, any, any, any>,
  {
    styles: [preflightStyles, baseStyles, progressStepperStepStyles, button]
  }
) as CustomElementWithName;
PuikProgressStepperStepCe.ceName = 'puik-progress-stepper-step-ce';

export default PuikProgressStepperStepCe;
