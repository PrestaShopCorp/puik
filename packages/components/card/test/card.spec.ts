import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import PuikCard from '../src/card.vue';
import type { MountingOptions, VueWrapper } from '@vue/test-utils';

describe('Card tests', () => {
  let wrapper: VueWrapper<any>;
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikCard, {
      props: {
        ...propsData
      },
      ...options
    });
  };
  it('should be a vue instance', () => {
    factory();
    expect(wrapper).toBeTruthy();
  });

  it('should display the slot content', () => {
    const slotDefault = 'Card content';

    factory(
      {},
      {
        slots: {
          default: slotDefault
        }
      }
    );
    expect(wrapper.text()).toEqual(slotDefault);
  });

  it('should display the default variant', () => {
    factory();
    expect(wrapper.classes()).toContain('puik-card--default');
  });

  it('should display the blue variant', () => {
    const variant = 'blue';
    factory({ variant });
    expect(wrapper.classes()).toContain(`puik-card--${variant}`);
  });
});
