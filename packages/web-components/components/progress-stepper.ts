import { defineCustomElement } from 'vue';
import { PuikProgressStepper } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikProgressStepperCe = defineCustomElement(PuikProgressStepper) as CustomElementWithName;
PuikProgressStepperCe.ceName = 'puik-progress-stepper-ce';

export default PuikProgressStepperCe;
