import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikDateRangePicker from '../src/date-range-picker.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('DateRangePicker tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikDateRangePicker, {
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
