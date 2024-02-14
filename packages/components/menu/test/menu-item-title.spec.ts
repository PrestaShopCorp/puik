import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikMenuItemTitle from './../src/menu-item-title.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

export function factoryMenu(
  template: string,
  options: MountingOptions<any> = {}
) {
  return mount({
    components: {
      PuikMenuItemTitle,
    },
    template,
    ...options,
  })
}

export const getTitle = (wrapper) => wrapper.find('.puik-menu-item-title')

describe('Menu title tests', () => {
  let wrapper: VueWrapper<any>

  it('should be a vue instance and have a data-test attribut', () => {
    wrapper = factoryMenu(`
        <puik-menu-item-title data-test="test">
          Title
        </puik-menu-item-title>
    `)
    expect(wrapper).toBeTruthy()
    expect(getTitle(wrapper).text()).toBe('Title')
    expect(wrapper.attributes('data-test')).toBe('title-test')
  })
})
