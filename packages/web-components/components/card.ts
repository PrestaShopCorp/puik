import { defineCustomElement } from 'vue';
import { PuikCard } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikCardCe = defineCustomElement(PuikCard) as CustomElementWithName;
PuikCardCe.ceName = 'puik-card-ce';

export default PuikCardCe;
