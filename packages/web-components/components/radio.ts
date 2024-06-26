import { defineCustomElement, DefineComponent } from 'vue';
import { PuikRadio } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikRadioCe = defineCustomElement(PuikRadio as DefineComponent<unknown, any, any, any>) as CustomElementWithName;
PuikRadioCe.ceName = 'puik-radio-ce';

export default PuikRadioCe;
