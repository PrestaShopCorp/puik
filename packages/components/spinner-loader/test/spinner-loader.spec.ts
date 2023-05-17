import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikSpinnerLoader from '../src/spinner-loader.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('SpinnerLoader tests', () => {
  let wrapper: VueWrapper<any>
  const findSpinnerLoader = () => wrapper.find('.puik-spinner-loader--spinner')

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
    expect(findSpinnerLoader().classes()).toContain('puik-spinner-loader--lg')
  })

  it('should display the spinner loader on size sm', () => {
    factory({ size: 'sm' })
    expect(findSpinnerLoader().classes()).toContain('puik-spinner-loader--sm')
  })
})
