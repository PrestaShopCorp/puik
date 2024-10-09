import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikRatingCard, RatingCardProps, PuikRatingCardVariants } from '@prestashopcorp/puik-components';

describe('RatingCard tests', () => {
  let wrapper: VueWrapper<any>;
  const factory = (
    props: RatingCardProps,
    options: ComponentMountingOptions<typeof PuikRatingCard> = {}
  ) => {
    wrapper = mount(PuikRatingCard, {
      props,
      ...options
    });
  };

  it('should be a vue instance', () => {
    factory({
      id: 'test-id',
      totalRatings: [3, 4, 3, 4, 3, 4] // Adjusted ratings for an average of 3.5
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('should display average rating correctly (Compact)', () => {
    const totalRatings = [3, 4, 3, 4, 3, 4];
    factory({
      id: 'test-id',
      totalRatings,
      variant: PuikRatingCardVariants.Compact
    });
    const averageRating = totalRatings.reduce((a, b) => a + b, 0) / totalRatings.length;
    expect(wrapper.find('.puik-rating-card_average-value').text()).toBe(averageRating.toFixed(1));
  });

  it('should display average rating correctly (Extended)', () => {
    const totalRatings = [3, 4, 3, 4, 3, 4];
    factory({
      id: 'test-id',
      totalRatings,
      variant: PuikRatingCardVariants.Extended
    });
    const averageRating = totalRatings.reduce((a, b) => a + b, 0) / totalRatings.length;
    expect(averageRating).toBe(3.5);
  });

  it('should display stars correctly (Extended)', () => {
    const averageRating = 3.5;
    factory({
      id: 'test-id',
      totalRatings: [3, 4, 3, 4, 3, 4],
      variant: PuikRatingCardVariants.Extended
    });

    const stars = wrapper.findAll('.puik-rating-card_star');
    expect(stars.length).toBe(5);

    const expectedIcons = ['star', 'star', 'star', 'star_half', 'star'];
    stars.forEach((star, index) => {
      expect(star.text()).toBe(expectedIcons[index]);
      const style = window.getComputedStyle(star.element as Element);
      if (index < Math.floor(averageRating)) {
        expect(style.getPropertyValue('font-variation-settings')).toContain('\'FILL\' 1');
      } else if (index === Math.floor(averageRating)) {
        expect(star.text()).toBe('star_half');
        expect(style.getPropertyValue('font-variation-settings')).toContain('\'FILL\' 1');
      } else {
        expect(style.getPropertyValue('font-variation-settings')).toContain('\'FILL\' 0');
      }
    });
  });

  it('should display total ratings if showTotalRatings is true (Compact)', () => {
    factory({
      id: 'test-id',
      totalRatings: [3, 4, 3, 4, 3, 4],
      variant: PuikRatingCardVariants.Compact,
      showTotalRatings: true
    });
    expect(wrapper.find('.puik-rating-card_total-ratings').text()).toBe('(6)');
  });

  it('should display total ratings if showTotalRatings is true (Extended)', () => {
    factory({
      id: 'test-id',
      totalRatings: [3, 4, 3, 4, 3, 4],
      variant: PuikRatingCardVariants.Extended,
      showTotalRatings: true
    });
    expect(wrapper.find('.puik-rating-card_total-ratings').text()).toBe('(6)');
  });

  it('should not display total ratings if showTotalRatings is false (Compact)', () => {
    factory({
      id: 'test-id',
      totalRatings: [3, 4, 3, 4, 3, 4],
      variant: PuikRatingCardVariants.Compact,
      showTotalRatings: false
    });
    expect(wrapper.find('.puik-rating-card_total-ratings').exists()).toBe(false);
  });

  it('should not display total ratings if showTotalRatings is false (Extended)', () => {
    factory({
      id: 'test-id',
      totalRatings: [3, 4, 3, 4, 3, 4],
      variant: PuikRatingCardVariants.Extended,
      showTotalRatings: false
    });
    expect(wrapper.find('.puik-rating-card_total-ratings').exists()).toBe(false);
  });
});
