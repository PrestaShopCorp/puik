import type { InjectionKey, Ref } from 'vue';
import type {
  EmblaOptionsType,
  EmblaCarouselType,
  EmblaPluginType,
} from 'embla-carousel';
import type Carousel from './carousel.vue';

export interface CarouselProps {
  opts?: EmblaOptionsType;
  plugins?: EmblaPluginType[];
  orientation?: 'horizontal' | 'vertical';
  verticalHeight?: string | number;
  itemWidth?: number;
}

export type CarouselContext = {
  carouselRef: Ref<HTMLElement | undefined>;
  api: Ref<EmblaCarouselType | undefined>;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: Ref<boolean>;
  canScrollNext: Ref<boolean>;
  orientation: 'horizontal' | 'vertical';
  selectedIndex: Ref<number>;
  scrollSnaps: Ref<number[]>;
  scrollTo: (index: number) => void;
};

export const CAROUSEL_INJECTION_KEY: InjectionKey<CarouselContext> =
  Symbol('puik-carousel');

export type CarouselInstance = InstanceType<typeof Carousel>;
