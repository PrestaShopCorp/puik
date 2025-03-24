import { defineCustomElement, DefineComponent } from 'vue';
import { PuikProgressStepperStep } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-progress-stepper-step.css';
import '@prestashopcorp/puik-theme/puik-button.css';

const PuikProgressStepperStepCe = defineCustomElement(PuikProgressStepperStep as DefineComponent<unknown, any, any, any>) as CustomElementWithName;
PuikProgressStepperStepCe.ceName = 'puik-progress-stepper-step-ce';

export default PuikProgressStepperStepCe;
