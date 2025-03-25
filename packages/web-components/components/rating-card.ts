import { defineCustomElement } from 'vue';
import { PuikRatingCard } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import ratingCardStyles from '@prestashopcorp/puik-theme/puik-rating-card.css?inline';

const PuikRatingCardCe = defineCustomElement(PuikRatingCard,
  {
    styles: [baseStyles, ratingCardStyles]
  }
) as CustomElementWithName;
PuikRatingCardCe.ceName = 'puik-rating-card-ce';

export default PuikRatingCardCe;
