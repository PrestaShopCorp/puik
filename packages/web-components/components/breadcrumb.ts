import { defineCustomElement } from 'vue';
import { PuikBreadcrumb } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-breadcrumb.css';
import '@prestashopcorp/puik-theme/puik-link.css';
import '@prestashopcorp/puik-theme/puik-icon.css';

const PuikBreadcrumbCe = defineCustomElement(PuikBreadcrumb) as CustomElementWithName;
PuikBreadcrumbCe.ceName = 'puik-breadcrumb-ce';

export default PuikBreadcrumbCe;
