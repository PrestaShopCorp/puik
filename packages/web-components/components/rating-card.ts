import { defineCustomElement } from 'vue';
import { PuikRatingCard } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-rating-card.css';

const PuikRatingCardCe = defineCustomElement(PuikRatingCard) as CustomElementWithName;
PuikRatingCardCe.ceName = 'puik-rating-card-ce';

export default PuikRatingCardCe;
