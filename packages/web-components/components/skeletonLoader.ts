import { defineCustomElement } from 'vue';
import { PuikSkeletonLoader } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import '@prestashopcorp/puik-theme/puik-skeleton-loader.css';

const PuikSkeletonLoaderCe = defineCustomElement(PuikSkeletonLoader) as CustomElementWithName;
PuikSkeletonLoaderCe.ceName = 'puik-skeleton-loader-ce';

export default PuikSkeletonLoaderCe;
