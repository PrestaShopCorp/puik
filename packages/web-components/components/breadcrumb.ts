import { defineCustomElement } from 'vue';
import { PuikBreadcrumb } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikBreadcrumbCe = defineCustomElement(PuikBreadcrumb) as CustomElementWithTagName;
PuikBreadcrumbCe.tagName = 'puik-breadcrumb-ce';

export default PuikBreadcrumbCe;
