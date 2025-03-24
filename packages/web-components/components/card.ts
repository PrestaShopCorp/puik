import { defineCustomElement } from 'vue';
import { PuikCard } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-card.css';

const PuikCardCe = defineCustomElement(PuikCard) as CustomElementWithName;
PuikCardCe.ceName = 'puik-card-ce';

export default PuikCardCe;
