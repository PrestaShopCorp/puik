import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikTabNavigationPanel from '../src/tab-navigation-panel.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('TabNavigationPanel tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikTabNavigationPanel, {
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
