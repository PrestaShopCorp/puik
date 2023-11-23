import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikCard, CardProps } from '@prestashopcorp/puik-components';

describe('Card tests', () => {
  let wrapper: VueWrapper<any>;
  const factory = (
    props?: CardProps,
    options?: ComponentMountingOptions<typeof PuikCard>
  ) => {
    wrapper = mount(PuikCard, {
      props,
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
