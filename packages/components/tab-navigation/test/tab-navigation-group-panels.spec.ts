import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikTabNavigationGroupPanels from '../src/tab-navigation-group-panels.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('TabNavigationGroupPanels tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikTabNavigationGroupPanels, {
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
