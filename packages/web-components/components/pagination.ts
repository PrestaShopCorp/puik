import { defineCustomElement } from 'vue';
import { PuikPagination } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-pagination.css';
import '@prestashopcorp/puik-theme/puik-button.css';
import '@prestashopcorp/puik-theme/puik-select.css';

const PuikPaginationCe = defineCustomElement(PuikPagination) as CustomElementWithName;
PuikPaginationCe.ceName = 'puik-pagination-ce';

export default PuikPaginationCe;
