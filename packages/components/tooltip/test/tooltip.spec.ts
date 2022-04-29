import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Tooltip from '../src/tooltip.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Tooltip tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(Tooltip, {
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
