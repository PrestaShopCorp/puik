import { defineCustomElement } from 'vue';
import { PuikSidebar } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-sidebar.css';
import '@prestashopcorp/puik-theme/puik-accordion-group.css';
import '@prestashopcorp/puik-theme/puik-button.css';

const PuikSidebarCe = defineCustomElement(PuikSidebar) as CustomElementWithName;
PuikSidebarCe.ceName = 'puik-sidebar-ce';

export default PuikSidebarCe;
