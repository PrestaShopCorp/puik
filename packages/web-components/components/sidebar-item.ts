import { defineCustomElement } from 'vue';
import { PuikSidebarItem } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikSidebarItemCe = defineCustomElement(PuikSidebarItem) as CustomElementWithTagName;
PuikSidebarItemCe.tagName = 'puik-sidebar-item-ce';

export default PuikSidebarItemCe;
