import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikTabNavigationGroupTitles from '../src/tab-navigation-group-titles.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('TabNavigationGroupTitles tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikTabNavigationGroupTitles, {
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
