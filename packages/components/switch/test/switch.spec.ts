import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Switch from '../src/switch.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Switch tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(Switch, {
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
