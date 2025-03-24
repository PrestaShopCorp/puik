import { defineCustomElement, DefineComponent } from 'vue';
import { PuikProgressStepper } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-progress-stepper.css';

const PuikProgressStepperCe = defineCustomElement(PuikProgressStepper as DefineComponent<unknown, any, any, any>) as CustomElementWithName;
PuikProgressStepperCe.ceName = 'puik-progress-stepper-ce';

export default PuikProgressStepperCe;
