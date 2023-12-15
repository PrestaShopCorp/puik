import { defineCustomElement } from 'vue';
import { PuikProgressStepperStep } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikProgressStepperStepCe = defineCustomElement(PuikProgressStepperStep) as CustomElementWithTagName;
PuikProgressStepperStepCe.tagName = 'puik-progress-stepper-step-ce';

export default PuikProgressStepperStepCe;
