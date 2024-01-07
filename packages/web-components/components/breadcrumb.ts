import { defineCustomElement } from 'vue';
import { PuikBreadcrumb } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikBreadcrumbCe = defineCustomElement(PuikBreadcrumb) as CustomElementWithName;
PuikBreadcrumbCe.ceName = 'puik-breadcrumb-ce';

export default PuikBreadcrumbCe;
