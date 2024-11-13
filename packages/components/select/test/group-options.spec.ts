import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikGroupOptions, GroupOptionsProps } from '@prestashopcorp/puik-components';

describe('GroupOptions tests', () => {
  let wrapper: VueWrapper<any>;
  const factory = (
    props: GroupOptionsProps,
    options: ComponentMountingOptions<typeof PuikGroupOptions>
  ) => {
    wrapper = mount(PuikGroupOptions, {
      props,
      ...options
    });
  };
  it('should be a vue instance', () => {
    factory();
    expect(wrapper).toBeTruthy();
  });
});
