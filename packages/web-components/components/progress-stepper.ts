import { defineCustomElement } from 'vue';
import { PuikProgressStepper } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikProgressStepperCe = defineCustomElement(PuikProgressStepper) as unknown as CustomElementWithTagName;
PuikProgressStepperCe.tagName = 'puik-progress-stepper-ce';

export default PuikProgressStepperCe;
