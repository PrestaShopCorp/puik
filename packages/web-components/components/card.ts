import { defineCustomElement } from 'vue';
import { PuikCard } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikCardCe = defineCustomElement(PuikCard) as unknown as CustomElementWithTagName;
PuikCardCe.tagName = 'puik-card-ce';

export default PuikCardCe;
