import { describe, it, expect } from 'vitest'
import { factoryMenu, showMenu, getMenuSeparator } from './menu.spec'
import type { VueWrapper } from '@vue/test-utils'

describe('Menu item separator tests', () => {
  let wrapper: VueWrapper<any>
  const template = `
    <puik-menu>
      <template #activator>
        <puik-button>Show menu</puik-button>
      </template>
      <puik-menu-item>First link</puik-menu-item>
      <puik-menu-item-separator></puik-menu-item-separator>
      <puik-menu-item>second link</puik-menu-item>
    </puik-menu>
  `
  it('should be a vue instance', () => {
    wrapper = factoryMenu(template)
    expect(wrapper).toBeTruthy()
  })
  it('should have separator', async () => {
    wrapper = factoryMenu(template)
    await showMenu(wrapper)
    expect(getMenuSeparator(wrapper)).toBeTruthy()
  })
})
