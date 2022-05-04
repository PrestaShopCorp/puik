import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Input from '../src/input.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Input tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(Input, {
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
