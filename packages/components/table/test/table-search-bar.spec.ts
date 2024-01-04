import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikTableSearchBar from '../src/table-search-bar.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('TableSearchBar tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikTableSearchBar, {
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
