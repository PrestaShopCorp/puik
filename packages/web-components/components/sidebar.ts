import { defineCustomElement } from 'vue';
import { PuikSidebar } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikSidebarCe = defineCustomElement(PuikSidebar) as unknown as CustomElementWithTagName;
PuikSidebarCe.tagName = 'puik-sidebar-ce';

export default PuikSidebarCe;
