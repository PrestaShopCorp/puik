import { defineCustomElement } from 'vue';
import { PuikCarousel } from '@prestashopcorp/puik-components';
import type { CustomElementWithName } from '../types';

const PuikCarouselCe = defineCustomElement(PuikCarousel) as CustomElementWithName;
PuikCarouselCe.ceName = 'puik-carousel-ce';

export default PuikCarouselCe;
