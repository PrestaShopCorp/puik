import { defineCustomElement } from 'vue';
import { PuikSidebarItem } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikSidebarItemCe = defineCustomElement(PuikSidebarItem) as CustomElementWithName;
PuikSidebarItemCe.ceName = 'puik-sidebar-item-ce';

export default PuikSidebarItemCe;
