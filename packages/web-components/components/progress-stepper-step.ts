import { defineCustomElement } from 'vue';
import { PuikProgressStepperStep } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikProgressStepperStepCe = defineCustomElement(PuikProgressStepperStep) as CustomElementWithName;
PuikProgressStepperStepCe.ceName = 'puik-progress-stepper-step-ce';

export default PuikProgressStepperStepCe;
