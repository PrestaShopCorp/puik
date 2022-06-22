import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Radio from '../src/radio.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Radio tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(Radio, {
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