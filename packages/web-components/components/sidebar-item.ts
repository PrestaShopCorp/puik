import { defineCustomElement } from 'vue';
import { PuikSidebarItem } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-sidebar-item.css';
import '@prestashopcorp/puik-theme/puik-button.css';

const PuikSidebarItemCe = defineCustomElement(PuikSidebarItem) as CustomElementWithName;
PuikSidebarItemCe.ceName = 'puik-sidebar-item-ce';

export default PuikSidebarItemCe;
