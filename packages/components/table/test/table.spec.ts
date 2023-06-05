import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikTable from '../src/table.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Table tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikTable, {
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
