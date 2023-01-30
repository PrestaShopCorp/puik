import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikPagination from '../src/pagination.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Pagination tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikPagination, {
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
