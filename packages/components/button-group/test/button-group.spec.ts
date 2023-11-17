import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import PuikButtonGroup from '../src/button-group.vue';
import type { MountingOptions, VueWrapper } from '@vue/test-utils';

describe('ButtonGroup tests', () => {
  let wrapper: VueWrapper<any>;

  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikButtonGroup, {
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
});
