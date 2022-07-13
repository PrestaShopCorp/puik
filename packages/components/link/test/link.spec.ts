import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikLink from '../src/link.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Link tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikLink, {
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
