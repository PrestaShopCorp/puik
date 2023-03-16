import { describe, it, expect } from 'vitest'
import { factoryMenu, showMenu } from './menu.spec'
import type { VueWrapper } from '@vue/test-utils'

describe('Menu item group tests', () => {
  let wrapper: VueWrapper<any>
  const title = 'Group title'
  const template = `
  <puik-menu>
    <template #activator>
      <puik-button>Show menu</puik-button>
    </template>
    <puik-menu-item-group title="${title}">
      <puik-menu-item>First link</puik-menu-item>
      <puik-menu-item-separator></puik-menu-item-separator>
      <puik-menu-item>second link</puik-menu-item>
    </puik-menu-item-group>
  </puik-menu>
  `
  const getMenuItemGroupTitle = (wrapper) =>
    wrapper.find('.puik-menu-item-group__title')

  it('should be a vue instance', () => {
    wrapper = factoryMenu(template)
    expect(wrapper).toBeTruthy()
  })
  it('should have title', async () => {
    wrapper = factoryMenu(template)
    await showMenu(wrapper)
    const groupTitle = getMenuItemGroupTitle(wrapper)
    expect(groupTitle.text()).toBe(title)
  })
})
