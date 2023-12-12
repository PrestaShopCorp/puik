import { mount, ComponentMountingOptions, VueWrapper } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { PuikProgressBar, ProgressBarProps } from '@prestashopcorp/puik-components';

describe('ProgressBar tests', () => {
  let wrapper: VueWrapper<any>;
  const defaultProps = {
    percentage: '10',
    barClass: ''
  };

  const factory = (
    props?: ProgressBarProps,
    options?: ComponentMountingOptions<typeof PuikProgressBar>
  ) => {
    wrapper = mount(PuikProgressBar, {
      props,
      ...options
    });
  };
  it('should set the width depending on modelValue prop', () => {
    factory({ ...defaultProps });
    expect(wrapper.html()).toContain('width: 10%');
  });
  it('should add the bar class to the progress bar content', () => {
    factory({ ...defaultProps, barClass: 'test-class' });
    expect(wrapper.find('.progress-bar__content.test-class').exists()).toBe(
      true
    );
  });

  it('should have a data-test attribute on progressBar container and content', () => {
    factory({ ...defaultProps, dataTest: 'test' });
    const progressBarContainer = wrapper.find('.progress-bar__container');
    const progressBarContent = wrapper.find('.progress-bar__content');
    expect(progressBarContainer.attributes('data-test')).toBe('test');
    expect(progressBarContent.attributes('data-test')).toBe('bar-test');
  });
});
