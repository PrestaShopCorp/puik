import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikTabNavigationItem from '../src/tab-navigation-item.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('TabNavigation tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikTabNavigationItem, {
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
