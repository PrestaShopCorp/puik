import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikSidebarItem from '../src/sidebar-item.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

let wrapper: VueWrapper<any>
const factory = (template: string, options: MountingOptions<any> = {}) => {
  wrapper = mount({
    components: {
      PuikSidebarItem,
    },
    template,
    ...options,
  })
}

describe('Sidebar tests', () => {
  it('should be a vue instance', () => {
    const template = `
      <puik-sidebar-item title="title" />
    `
    factory(template)
    expect(wrapper).toBeTruthy()
  })

  it('should be active', () => {
    const template = `
      <puik-sidebar-item title="title" active />
    `
    factory(template)
    expect(wrapper.classes()).toContain('puik-sidebar-item--active')
  })
})
