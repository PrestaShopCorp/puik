import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { PuikSidebarItem, PuikSidebarGroupItem } from '..'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

let wrapper: VueWrapper<any>
const factory = (template: string, options: MountingOptions<any> = {}) => {
  wrapper = mount({
    components: {
      PuikSidebarGroupItem,
      PuikSidebarItem,
    },
    template,
    ...options,
  })
}

describe('Sidebar tests', () => {
  it('should be a vue instance', () => {
    const template = `
    <puik-sidebar-group-item title="group" icon="store">
      <puik-sidebar-item title="title" />
    </puik-sidebar-group-item>
    `
    factory(template)
    expect(wrapper).toBeTruthy()
  })

  it('should be active', () => {
    const template = `
    <puik-sidebar-group-item title="group" icon="store" active>
      <puik-sidebar-item title="title" />
    </puik-sidebar-group-item>
    `
    factory(template)
    expect(wrapper.classes()).toContain('puik-sidebar-group-item--active')
  })
})
