import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikDivider, DividerProps, PuikDividerOrientation } from '@prestashopcorp/puik-components';

describe('Divider tests', () => {
  let wrapper: VueWrapper<any>;
  const findDivider = () => wrapper.find('.puik-divider');
  const factory = (
    props?: DividerProps,
    options?: ComponentMountingOptions<typeof PuikDivider>
  ) => {
    wrapper = mount(PuikDivider, {
      props,
      ...options
    });
  };
  it('should be a vue instance', () => {
    factory();
    expect(wrapper).toBeTruthy();
  });

  it('should be a vertical divider', () => {
    factory({ orientation: PuikDividerOrientation.Vertical });
    expect(findDivider().classes()).toContain('puik-divider--vertical');
  });

  it('the value of the data-test attribute should be "test"', () => {
    factory({ orientation: PuikDividerOrientation.Vertical, dataTest: 'test' });
    expect(findDivider().attributes('data-test')).toBe('test');
  });
});
