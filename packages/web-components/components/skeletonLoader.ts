import { defineCustomElement } from 'vue';
import { PuikSkeletonLoader } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

import preflightStyles from '@prestashopcorp/puik-theme/tailwind-preflight.css?inline';
import baseStyles from '@prestashopcorp/puik-theme/base.css?inline';
import skeletonLoaderStyles from '@prestashopcorp/puik-theme/puik-skeleton-loader.css?inline';

const PuikSkeletonLoaderCe = defineCustomElement(PuikSkeletonLoader,
  {
    styles: [preflightStyles, baseStyles, skeletonLoaderStyles]
  }
) as CustomElementWithName;
PuikSkeletonLoaderCe.ceName = 'puik-skeleton-loader-ce';

export default PuikSkeletonLoaderCe;
