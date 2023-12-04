import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikLink from '../src/link.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('Link tests', () => {
  let wrapper: VueWrapper<any>
  const findLink = () => wrapper.find('.puik-link')
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikLink, {
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

  it('should be a router-link if to prop is defined', () => {
    factory({ to: '/test' })
    expect(findLink().element.tagName).toBe('ROUTER-LINK')
  })

  it('should be a link if href prop is defined', () => {
    factory({ href: '/test' })
    expect(findLink().element.tagName).toBe('A')
  })

  it('should have size class', () => {
    factory({ href: '/test', size: 'sm' })
    expect(findLink().classes()).toContain('puik-link--sm')
  })

  it('should have a data-test attribute', () => {
    factory({ href: '/test', 'data-test': 'test' })
    expect(findLink().attributes('data-test')).toBe('test')
  })

  it('should set the link in high-contrast mode', () => {
    factory({ highContrast: true })
    expect(findLink().classes()).toContain('puik-link--high-contrast')
  })
})
