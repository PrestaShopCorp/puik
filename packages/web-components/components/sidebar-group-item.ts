import { defineCustomElement } from 'vue';
import { PuikSidebarGroupItem } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikSidebarGroupItemCe = defineCustomElement(PuikSidebarGroupItem) as CustomElementWithName;
PuikSidebarGroupItemCe.ceName = 'puik-sidebar-group-item-ce';

export default PuikSidebarGroupItemCe;
