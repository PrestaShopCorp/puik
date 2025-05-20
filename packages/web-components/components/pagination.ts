import { defineCustomElement } from 'vue';
import { PuikPagination } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import paginationStyles from '@prestashopcorp/puik-theme/puik-pagination.css?inline';
import buttonStyles from '@prestashopcorp/puik-theme/puik-button.css?inline';
import selectStyles from '@prestashopcorp/puik-theme/puik-select.css?inline';

const PuikPaginationCe = defineCustomElement(PuikPagination,
  {
    styles: [preflightStyles, baseStyles, paginationStyles, buttonStyles, selectStyles]
  }
) as CustomElementWithName;
PuikPaginationCe.ceName = 'puik-pagination-ce';

export default PuikPaginationCe;
