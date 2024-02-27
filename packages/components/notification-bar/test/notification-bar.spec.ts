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
        messages: [{ text: 'Default message' }],
        ...propsData,
      },
      ...options,
    })
  }
  it('should be a vue instance', () => {
    factory()
    expect(wrapper).toBeTruthy()
  })

  it('should accept teleport prop', () => {
    const teleport = { to: 'body', prepend: true }
    factory({ teleport })
    expect(wrapper.props().teleport).toEqual(teleport)
  })

  it('should accept variant prop', () => {
    const variant = 'blue'
    factory({ variant })
    expect(wrapper.props().variant).toBe(variant)
  })

  it('should accept closable prop', () => {
    const closable = true
    factory({ closable })
    expect(wrapper.props().closable).toBe(closable)
  })

  it('should accept messages prop', () => {
    const messages = [
      {
        icon: 'info',
        text: 'This is a test message',
        link: { url: 'https://test.com', text: 'Test Link' },
      },
    ]
    factory({ messages })
    expect(wrapper.props().messages).toEqual(messages)
  })

  it('should emit close event when close button is clicked', async () => {
    factory({
      closable: true,
      messages: [{ text: 'This is a test message' }],
    })
    await wrapper.find('.notification-bar__close-button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('close')
  })

  it('should have correct classes based on props', () => {
    factory({
      variant: 'blue',
      closable: true,
      messages: [{ text: 'This is a test message' }],
    })
    expect(wrapper.find('.notification-bar__container').classes()).toContain(
      'notification-bar__container--blue'
    )
    expect(wrapper.find('.notification-bar__container').classes()).toContain(
      'notification-bar__container--closable'
    )
  })
})
