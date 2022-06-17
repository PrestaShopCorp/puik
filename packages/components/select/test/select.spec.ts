import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Select from '../src/select.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Select tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(Select, {
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
