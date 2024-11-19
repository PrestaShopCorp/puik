import { defineCustomElement } from 'vue';
import { PuikRatingCard } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikRatingCardCe = defineCustomElement(PuikRatingCard) as CustomElementWithName;
PuikRatingCardCe.ceName = 'puik-rating-card-ce';

export default PuikRatingCardCe;
