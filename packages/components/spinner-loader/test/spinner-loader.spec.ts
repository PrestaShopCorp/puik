import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikSpinnerLoader from '../src/spinner-loader.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('SpinnerLoader tests', () => {
  let wrapper: VueWrapper<any>
  const findComponent = () => wrapper.find('.puik-spinner-loader')
  const findLabel = () => wrapper.find('.puik-spinner-loader__text')

  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikSpinnerLoader, {
      props: {
        ...propsData,
      },
      ...options,
    })
  }
  it('should be a vue instance', () => {
    factory()
    expect(wrapper).toBeTruthy()
  })

  it('should display the spinner loader on size lg', () => {
    factory({ size: 'lg' })
    expect(findComponent().classes()).toContain('puik-spinner-loader--lg')
  })

  it('should display the spinner loader on size md', () => {
    factory()
    expect(findComponent().classes()).toContain('puik-spinner-loader--md')
  })

  it('should display the spinner loader on size sm', () => {
    factory({ size: 'sm' })
    expect(findComponent().classes()).toContain('puik-spinner-loader--sm')
  })

  it('should display the spinner loader variant as dark', () => {
    factory({ variant: 'dark' })
    expect(findComponent().classes()).toContain('puik-spinner-loader--dark')
  })

  it('should display the spinner loader variant as light', () => {
    factory({ variant: 'light' })
    expect(findComponent().classes()).toContain('puik-spinner-loader--light')
  })

  it('should display the spinner loader label below the spinner.', () => {
    factory({ text: 'Loading ...' })
    expect(findLabel().exists()).toBeTruthy()
    expect(findLabel().text()).toBe('Loading ...')
  })

  it('should display the spinner loader label next to the right the spinner.', () => {
    factory({ textRight: 'Loading ...' })
    expect(findComponent().classes()).toContain('puik-spinner-loader--right')
    expect(findLabel().exists()).toBeTruthy()
    expect(findLabel().text()).toBe('Loading ...')
  })
})
