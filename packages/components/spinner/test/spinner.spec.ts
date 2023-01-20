import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikSpinner from '../src/spinner.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Spinner tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikSpinner, {
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
})
