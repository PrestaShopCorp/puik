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

  it('should have the role attribute set to region', () => {
    factory();
    expect(wrapper.attributes('role')).toBe('region');
  });

  it('should have the tabindex attribute set to 0', () => {
    factory();
    expect(wrapper.attributes('tabindex')).toBe('0');
  });

  it('should set the aria-label attribute', () => {
    const ariaLabel = 'Card description';
    factory({ ariaLabel });
    expect(wrapper.attributes('aria-label')).toBe(ariaLabel);
  });
});
