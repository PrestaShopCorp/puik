import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikSelectInput, SelectInputProps } from '@prestashopcorp/puik-components';

describe('SelectInput tests', () => {
  let wrapper: VueWrapper<any>;
  const factory = (
    props: SelectInputProps,
    options: ComponentMountingOptions<typeof PuikSelectInput>
  ) => {
    wrapper = mount(PuikSelectInput, {
      props,
      ...options
    });
  };
  it('should be a vue instance', () => {
    factory();
    expect(wrapper).toBeTruthy();
  });
});
