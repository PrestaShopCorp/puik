import { defineCustomElement } from 'vue';
import { PuikSidebarTitle } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikSidebarTitleCe = defineCustomElement(PuikSidebarTitle) as CustomElementWithTagName;
PuikSidebarTitleCe.tagName = 'puik-sidebar-title-ce';

export default PuikSidebarTitleCe;
