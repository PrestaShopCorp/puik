import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikTableSearchInput from '../src/table-search-input.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('TableSearchInput tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikTableSearchInput, {
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
