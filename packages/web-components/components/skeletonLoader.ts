import { defineCustomElement } from 'vue';
import { PuikSkeletonLoader } from '@prestashopcorp/puik-components';
import type { CustomElementWithTagName } from '../types';

const PuikSkeletonLoaderCe = defineCustomElement(PuikSkeletonLoader) as CustomElementWithTagName;
PuikSkeletonLoaderCe.tagName = 'puik-skeleton-loader-ce';

export default PuikSkeletonLoaderCe;
