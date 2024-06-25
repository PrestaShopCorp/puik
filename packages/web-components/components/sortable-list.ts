import { defineCustomElement } from 'vue';
import { PuikSortableList } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikSortableListCe = defineCustomElement(PuikSortableList) as CustomElementWithName;
PuikSortableListCe.ceName = 'puik-sortable-list-ce';

export default PuikSortableListCe;
