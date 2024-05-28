import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikBadge, BadgeProps } from '@prestashopcorp/puik-components';

describe('Badge tests', () => {
  let wrapper: VueWrapper<any>;

  const findBadge = () => wrapper.find('.puik-badge');

  const factory = (
    props?: BadgeProps,
    options?: ComponentMountingOptions<typeof PuikBadge>
  ) => {
    wrapper = mount(PuikBadge, {
      props,
      ...options
    });
  };

  it('should be a vue instance', () => {
    factory();
    expect(wrapper).toBeTruthy();
  });

  it('should display a neutral badge by default', () => {
    factory();
    expect(findBadge().classes()).toContain('puik-badge--neutral');
  });

  it('should display an info badge', () => {
    factory({ variant: 'info' });
    expect(findBadge().classes()).toContain('puik-badge--info');
  });

  it('should display a text', () => {
    const slotDefault = 'Badge content';
    factory(
      {},
      {
        slots: {
          default: slotDefault
        }
      }
    );
    expect(findBadge().text()).toBe(slotDefault);
  });

  it('should have a data-test attribute', () => {
    factory({ dataTest: 'test' });
    expect(findBadge().attributes('data-test')).toBe('test');
  });
});
