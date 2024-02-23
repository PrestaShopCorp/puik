import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikSnackbarProvider, SnackbarProviderProps } from '@prestashopcorp/puik-components';

describe('SnackbarProvider tests', () => {
  let wrapper: VueWrapper<any>;

  const factory = (
    props?: SnackbarProviderProps,
    options?: ComponentMountingOptions<typeof PuikSnackbarProvider>
  ) => {
    wrapper = mount(PuikSnackbarProvider, {
      props,
      ...options
    });
  };

  it('should be a vue instance', () => {
    factory();
    expect(wrapper).toBeTruthy();
  });
});
