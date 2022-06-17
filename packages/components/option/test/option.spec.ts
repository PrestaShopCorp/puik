import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Option from '../src/option.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Option tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(Option, {
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
