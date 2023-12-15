import { defineCustomElement } from 'vue';
import { PuikSkeletonLoaderGroup } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikSkeletonLoaderGroupCe = defineCustomElement(PuikSkeletonLoaderGroup) as CustomElementWithTagName;
PuikSkeletonLoaderGroupCe.tagName = 'puik-skeleton-loader-group-ce';

export default PuikSkeletonLoaderGroupCe;
