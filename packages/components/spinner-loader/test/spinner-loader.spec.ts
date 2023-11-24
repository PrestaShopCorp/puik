import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikSpinnerLoader, SpinnerLoaderProps } from '@prestashopcorp/puik-components';

describe('SpinnerLoader tests', () => {
  let wrapper: VueWrapper<any>;
  const findComponent = () => wrapper.find('.puik-spinner-loader');
  const findLabel = () => wrapper.find('.puik-spinner-loader__label');

  const factory = (
    props?: SpinnerLoaderProps,
    options?: ComponentMountingOptions<typeof PuikSpinnerLoader>
  ) => {
    wrapper = mount(PuikSpinnerLoader, {
      props,
      ...options
    });
  };
  it('should be a vue instance', () => {
    factory();
    expect(wrapper).toBeTruthy();
  });

  it('should display the spinner loader on size lg', () => {
    factory({ size: 'lg' });
    expect(findComponent().classes()).toContain('puik-spinner-loader--lg');
  });

  it('should display the spinner loader on size md', () => {
    factory();
    expect(findComponent().classes()).toContain('puik-spinner-loader--md');
  });

  it('should display the spinner loader on size sm', () => {
    factory({ size: 'sm' });
    expect(findComponent().classes()).toContain('puik-spinner-loader--sm');
  });

  it('should display the spinner loader color as primary', () => {
    factory({ color: 'primary' });
    expect(findComponent().classes()).toContain('puik-spinner-loader--primary');
  });

  it('should display the spinner loader color as reverse', () => {
    factory({ color: 'reverse' });
    expect(findComponent().classes()).toContain('puik-spinner-loader--reverse');
  });

  it('should display the spinner loader label below the spinner.', () => {
    const label = 'Loading ...';
    factory({ label });
    expect(findLabel().exists()).toBeTruthy();
    expect(findLabel().text()).toBe(label);
  });

  it('should display the spinner loader label next to the right the spinner.', () => {
    const label = 'Loading ...';
    factory({ label, position: 'right' });
    expect(findComponent().classes()).toContain('puik-spinner-loader--right');
    expect(findLabel().exists()).toBeTruthy();
    expect(findLabel().text()).toBe(label);
  });

  it('should have a data-test attribute', () => {
    factory({ dataTest: 'test' });
    expect(findComponent().attributes('data-test')).toBe('test');
  });
});
