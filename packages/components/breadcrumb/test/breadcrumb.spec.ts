import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikBreadcrumb from '../src/breadcrumb.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'
import type { BreadcrumbItem } from '../src/breadcrumb'

describe('Breadcrumb tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikBreadcrumb, {
      props: {
        ...propsData,
      },
      ...options,
    })
  }

  const getBreadcrumbItems = () =>
    wrapper.findAll('.puik-breadcrumb__item-link')
  const getBreadcrumbSeparatorIcons = () =>
    wrapper.findAll('.puik-breadcrumb__item-icon')
  const getBreadcrumbHomeIcon = () =>
    wrapper.find('.puik-breadcrumb__home-icon')

  const items: BreadcrumbItem[] = [
    {
      label: 'First link',
      href: '#',
    },
    {
      label: 'Second link',
      href: '#',
    },
    {
      label: 'Third link',
      to: 'name',
    },
  ]
  it('should be a vue instance', () => {
    factory({ items })
    expect(wrapper).toBeTruthy()
  })
  it('should not display without items', () => {
    factory({ items: [] })
    expect(wrapper.element.tagName).toBeFalsy()
  })
  it('should first item be A with href', () => {
    factory({ items })
    const localItems = getBreadcrumbItems()
    expect(localItems[0].element.tagName).toBe('A')
    expect(localItems[0].element.getAttribute('href')).toBe(items[0].href)
  })
  it('should third item be ROUTER-LINK with to', () => {
    factory({ items })
    const localItems = getBreadcrumbItems()
    expect(localItems[2].element.tagName).toBe('ROUTER-LINK')
    expect(localItems[2].element.getAttribute('to')).toBe(items[2].to)
  })
  it('should display only two separator icon', () => {
    factory({ items })
    expect(getBreadcrumbSeparatorIcons().length).toBe(2)
  })
  it('should not display separator icon', () => {
    factory({ items: [items[0]] })
    expect(getBreadcrumbSeparatorIcons().length).toBe(0)
  })
  it('should display custom icon', () => {
    const separatorIcon = 'check'
    factory({ items, separatorIcon })
    const icons = getBreadcrumbSeparatorIcons()
    expect(icons[0].text()).toBe(separatorIcon)
  })
  it('should display home icon', () => {
    const icon = 'home'
    factory({ items, icon })
    expect(getBreadcrumbHomeIcon().text()).toBe(icon)
  })
  it('should have target', () => {
    const target = '_top'
    const items = [
      {
        label: 'Link',
        href: '#',
        target,
      },
    ]
    items[0].target = target
    factory({ items })
    expect(getBreadcrumbItems()[0].element.getAttribute('target')).toBe(target)
  })
})
