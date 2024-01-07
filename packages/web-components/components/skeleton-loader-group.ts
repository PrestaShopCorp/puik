import { defineCustomElement } from 'vue';
import { PuikSkeletonLoaderGroup } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikSkeletonLoaderGroupCe = defineCustomElement(PuikSkeletonLoaderGroup) as CustomElementWithName;
PuikSkeletonLoaderGroupCe.ceName = 'puik-skeleton-loader-group-ce';

export default PuikSkeletonLoaderGroupCe;
