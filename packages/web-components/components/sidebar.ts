import { defineCustomElement } from 'vue';
import { PuikSidebar } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikSidebarCe = defineCustomElement(PuikSidebar) as CustomElementWithName;
PuikSidebarCe.ceName = 'puik-sidebar-ce';

export default PuikSidebarCe;
