import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikComboBox, ComboBoxProps } from '@prestashopcorp/puik-components';

describe('ComboBox tests', () => {
  let wrapper: VueWrapper<any>;
  const factory = (
    props: ComboBoxProps,
    options: ComponentMountingOptions<typeof PuikComboBox>
  ) => {
    wrapper = mount(PuikComboBox, {
      props,
      ...options
    });
  };
  it('should be a vue instance', () => {
    factory();
    expect(wrapper).toBeTruthy();
  });
});
