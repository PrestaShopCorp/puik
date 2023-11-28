import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikProgressBar from '../src/progress-bar.vue'
import type { MountingOptions } from '@vue/test-utils'
import type { ProgressBarProps } from '../src/progress-bar'

describe('ProgressBar tests', () => {
  let wrapper
  const defaultProps: ProgressBarProps = {
    percentage: '10',
    barClass: '',
  }

  const factory = (
    props: ProgressBarProps = defaultProps,
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikProgressBar, {
      props,
      ...options,
    })
  }
  it('should set the width depending on modelValue prop', () => {
    factory()
    expect(wrapper.html()).toContain('width: 10%')
  })
  it('should add the bar class to the progress bar content', () => {
    factory({ ...defaultProps, barClass: 'test-class' })
    expect(wrapper.find('.progress-bar__content.test-class').exists()).toBe(
      true
    )
  })

  it('should have a data-test attribute on progressBar container and content', () => {
    factory({ ...defaultProps, dataTest: 'test' })
    const progressBarContainer = wrapper.find('.progress-bar__container')
    const progressBarContent = wrapper.find('.progress-bar__content')
    expect(progressBarContainer.attributes('data-test')).toBe('test')
    expect(progressBarContent.attributes('data-test')).toBe('bar-test')
  })
})
