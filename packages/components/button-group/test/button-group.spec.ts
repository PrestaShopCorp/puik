import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikButtonGroup } from '@prestashopcorp/puik-components';
import type { ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { ExtractComponentPropType } from '@prestashopcorp/puik-utils';

type PuikButtonGroupProps = ExtractComponentPropType<typeof PuikButtonGroup>;

describe('ButtonGroup tests', () => {
  let wrapper: VueWrapper<any>;

  const factory = (
    props?: PuikButtonGroupProps,
    options?: ComponentMountingOptions<PuikButtonGroupProps>
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
