import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikNotificationBar from '../src/notification-bar.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('NotificationBar tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikNotificationBar, {
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
