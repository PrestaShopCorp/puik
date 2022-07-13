import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikSearch from '../src/search.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Search tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikSearch, {
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
