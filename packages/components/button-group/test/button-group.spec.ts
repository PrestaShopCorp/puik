import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikButtonGroup, ButtonGroupProps } from '@prestashopcorp/puik-components';

describe('ButtonGroup tests', () => {
  let wrapper: VueWrapper<any>;

  const factory = (
    props?: ButtonGroupProps,
    options?: ComponentMountingOptions<typeof PuikButtonGroup>
  ) => {
    wrapper = mount(PuikButtonGroup, {
      props,
      ...options
    });
  };
  it('should be a vue instance', () => {
    factory();
    expect(wrapper).toBeTruthy();
  });
});
