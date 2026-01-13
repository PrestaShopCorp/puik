import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikCarousel, CarouselProps } from '@prestashopcorp/puik-components';

describe('Carousel tests', () => {
  let wrapper: VueWrapper<any>;
  const factory = (
    props: CarouselProps,
    options: ComponentMountingOptions<typeof PuikCarousel>
  ) => {
    wrapper = mount(PuikCarousel, {
      props,
      ...options
    });
  };
  it('should be a vue instance', () => {
    factory();
    expect(wrapper).toBeTruthy();
  });
});
