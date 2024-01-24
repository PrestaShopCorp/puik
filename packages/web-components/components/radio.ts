import { defineCustomElement } from 'vue';
import { PuikRadio } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikRadioCe = defineCustomElement(PuikRadio) as CustomElementWithName;
PuikRadioCe.ceName = 'puik-radio-ce';

export default PuikRadioCe;
