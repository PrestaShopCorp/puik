import { defineCustomElement } from 'vue';
import { PuikPagination } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikPaginationCe = defineCustomElement(PuikPagination) as CustomElementWithName;
PuikPaginationCe.ceName = 'puik-pagination-ce';

export default PuikPaginationCe;
