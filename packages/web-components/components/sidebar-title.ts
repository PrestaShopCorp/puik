import { defineCustomElement } from 'vue';
import { PuikSidebarTitle } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-sidebar-title.css';

const PuikSidebarTitleCe = defineCustomElement(PuikSidebarTitle) as CustomElementWithName;
PuikSidebarTitleCe.ceName = 'puik-sidebar-title-ce';

export default PuikSidebarTitleCe;
