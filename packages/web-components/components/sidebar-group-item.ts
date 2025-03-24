import { defineCustomElement } from 'vue';
import { PuikSidebarGroupItem } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-sidebar-group-item.css';
import '@prestashopcorp/puik-theme/puik-accordion.css';
import '@prestashopcorp/puik-theme/puik-button.css';
import '@prestashopcorp/puik-theme/puik-icon.css';

const PuikSidebarGroupItemCe = defineCustomElement(PuikSidebarGroupItem) as CustomElementWithName;
PuikSidebarGroupItemCe.ceName = 'puik-sidebar-group-item-ce';

export default PuikSidebarGroupItemCe;
