import { defineCustomElement, DefineComponent } from 'vue';
import { PuikInput } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikInputCe = defineCustomElement(PuikInput as DefineComponent<unknown, any, any, any>) as CustomElementWithName;
PuikInputCe.ceName = 'puik-input-ce';

export default PuikInputCe;
