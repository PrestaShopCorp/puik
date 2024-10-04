import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikRatingCard, RatingCardProps } from '@prestashopcorp/puik-components';

describe('RatingCard tests', () => {
  let wrapper: VueWrapper<any>;
  const factory = (
    props: RatingCardProps,
    options: ComponentMountingOptions<typeof PuikRatingCard>
  ) => {
    wrapper = mount(PuikRatingCard, {
      props,
      ...options
    });
  };
  it('should be a vue instance', () => {
    factory();
    expect(wrapper).toBeTruthy();
  });
});
