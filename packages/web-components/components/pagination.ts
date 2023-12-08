import { defineCustomElement } from 'vue';
import { PuikPagination } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikPaginationCe = defineCustomElement(PuikPagination) as unknown as CustomElementWithTagName;
PuikPaginationCe.tagName = 'puik-pagination-ce';

export default PuikPaginationCe;
