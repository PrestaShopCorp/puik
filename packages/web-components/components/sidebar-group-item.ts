import { defineCustomElement } from 'vue';
import { PuikSidebarGroupItem } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikSidebarGroupItemCe = defineCustomElement(PuikSidebarGroupItem) as unknown as CustomElementWithTagName;
PuikSidebarGroupItemCe.tagName = 'puik-sidebar-group-item-ce';

export default PuikSidebarGroupItemCe;
